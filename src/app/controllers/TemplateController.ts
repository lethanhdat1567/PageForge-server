import { Request, Response } from 'express';
import prisma from '~/prismaClient';
import { getMultipleFilename } from '~/utils/getFilename';
import deleteFileIfExist from '~/utils/deleteFileExit';

class TemplateController {
    // GET /templates

    async index(req: Request, res: Response): Promise<any> {
        try {
            const { status, sort } = req.query;

            const whereClause: any = {};
            const orderByClause: any = {};

            // Lọc theo trạng thái nếu có
            if (status && status !== 'all') {
                whereClause.status = status as 'active' | 'inactive';
            }

            // Sắp xếp theo yêu cầu
            switch (sort) {
                case 'newest':
                    orderByClause.created_at = 'desc';
                    break;
                case 'oldest':
                    orderByClause.created_at = 'asc';
                    break;
                case 'top_rated':
                    orderByClause.rating = 'desc';
                    break;
                default:
                    orderByClause.created_at = 'desc';
            }

            const templates = await prisma.template.findMany({
                where: whereClause,
                orderBy: orderByClause
            });

            return res.json({ data: templates });
        } catch (error) {
            console.error('[Template Index Error]', error);
            return res.status(500).json({ message: 'Failed to fetch templates' });
        }
    }

    // GET /templates/:id
    async show(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        try {
            const template = await prisma.template.findUnique({
                where: { id: Number(id) }
            });
            if (!template) return res.status(404).json({ message: 'Template not found' });
            res.json({ data: template });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Failed to fetch template' });
        }
    }

    // POST /templates
    async create(req: Request, res: Response) {
        const { name, description, status, price } = req.body;

        const main_thumbnail = getMultipleFilename(req, 'main_thumbnail');
        const sub_thumbnail = getMultipleFilename(req, 'sub_thumbnail');
        const banner = getMultipleFilename(req, 'banner');

        try {
            const template = await prisma.template.create({
                data: {
                    name,
                    description,
                    status,
                    price: price === '' ? null : price,
                    main_thumbnail,
                    sub_thumbnail,
                    banner
                }
            });
            res.status(201).json({ data: template });
        } catch (error) {
            console.log(error);
            if (main_thumbnail) deleteFileIfExist(main_thumbnail);
            if (sub_thumbnail) deleteFileIfExist(sub_thumbnail);
            if (banner) deleteFileIfExist(banner);
            res.status(500).json({ message: 'Failed to create template' });
        }
    }

    // PUT /templates/:id
    async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { name, description, status, price } = req.body;

        const main_thumbnail = getMultipleFilename(req, 'main_thumbnail');
        const sub_thumbnail = getMultipleFilename(req, 'sub_thumbnail');
        const banner = getMultipleFilename(req, 'banner');

        try {
            const existing = await prisma.template.findUnique({
                where: { id: Number(id) }
            });

            if (!existing) {
                return res.status(404).json({ message: 'Template not found' });
            }

            // Xóa ảnh cũ nếu có ảnh mới
            if (main_thumbnail && existing.main_thumbnail) {
                deleteFileIfExist(existing.main_thumbnail);
            }
            if (sub_thumbnail && existing.sub_thumbnail) {
                deleteFileIfExist(existing.sub_thumbnail);
            }
            if (banner && existing.banner) {
                deleteFileIfExist(existing.banner);
            }

            const updated = await prisma.template.update({
                where: { id: Number(id) },
                data: {
                    name,
                    description,
                    status,
                    price: price === '' ? null : price,
                    main_thumbnail: main_thumbnail || existing.main_thumbnail,
                    sub_thumbnail: sub_thumbnail || existing.sub_thumbnail,
                    banner: banner || existing.banner
                }
            });

            res.json({ data: updated });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Failed to update template' });
        }
    }

    //PATCH /templates/:id
    async updateField(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { name, status } = req.body;

        let updatedData;

        if (name) {
            console.log(name);
            updatedData = await prisma.template.update({
                where: { id: Number(id) },
                data: {
                    name
                }
            });
        } else if (status) {
            updatedData = await prisma.template.update({
                where: { id: Number(id) },
                data: {
                    status
                }
            });
        } else {
            return res.status(400).json({ message: 'Không tìm thấy name hoặc status' });
        }

        return res.status(200).json({ message: 'Update successfully!', data: updatedData });
    }

    // DELETE /templates/:id
    async destroy(req: Request, res: Response): Promise<any> {
        const { id } = req.params;

        try {
            // Lấy template hiện tại từ DB để có thông tin ảnh
            const existingTemplate = await prisma.template.findUnique({
                where: { id: Number(id) }
            });

            if (!existingTemplate) {
                return res.status(404).json({ message: 'Template not found' });
            }

            // Xóa ảnh nếu có
            if (existingTemplate.main_thumbnail) {
                deleteFileIfExist(existingTemplate.main_thumbnail);
            }

            if (existingTemplate.sub_thumbnail) {
                deleteFileIfExist(existingTemplate.sub_thumbnail);
            }

            // Xóa template khỏi cơ sở dữ liệu
            await prisma.template.delete({
                where: { id: Number(id) }
            });

            res.status(200).json({ message: 'Template deleted successfully' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Failed to delete template' });
        }
    }

    // DELETE /templates/bulk
    async bulkDestroy(req: Request, res: Response): Promise<any> {
        const { ids } = req.body;
        console.log(ids);

        if (!Array.isArray(ids) || ids.length === 0) {
            return res.status(400).json({ message: 'No IDs provided for deletion' });
        }

        try {
            // Lấy thông tin các template để xoá ảnh liên quan
            const templates = await prisma.template.findMany({
                where: {
                    id: { in: ids }
                }
            });

            // Xoá file ảnh nếu có
            templates.forEach((template) => {
                if (template.main_thumbnail) deleteFileIfExist(template.main_thumbnail);
                if (template.sub_thumbnail) deleteFileIfExist(template.sub_thumbnail);
            });

            // Xoá các bản ghi
            await prisma.template.deleteMany({
                where: {
                    id: { in: ids }
                }
            });

            res.status(200).json({ message: 'Templates deleted successfully' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Failed to delete templates' });
        }
    }
}
export default new TemplateController();
