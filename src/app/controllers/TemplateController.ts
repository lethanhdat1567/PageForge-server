import { Request, Response } from 'express';
import prisma from '~/prismaClient';
import { getMultipleFilename } from '~/utils/getFilename';
import deleteFileIfExist from '~/utils/deleteFileExit';

class TemplateController {
    // GET /templates
    async index(req: Request, res: Response) {
        try {
            const templates = await prisma.template.findMany();
            res.json({ data: templates });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Failed to fetch templates' });
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
        const { name, description, status } = req.body;

        const main_thumbnail = getMultipleFilename(req, 'main_thumbnail');
        const sub_thumbnail = getMultipleFilename(req, 'sub_thumbnail');

        try {
            const template = await prisma.template.create({
                data: { name, description, main_thumbnail, sub_thumbnail, status }
            });
            res.status(201).json({ data: template });
        } catch (error) {
            console.log(error);
            if (main_thumbnail) {
                deleteFileIfExist(main_thumbnail); // Xóa ảnh main_thumbnail nếu có
            }
            if (sub_thumbnail) {
                deleteFileIfExist(sub_thumbnail); // Xóa ảnh sub_thumbnail nếu có
            }
            res.status(500).json({ message: 'Failed to create template' });
        }
    }

    async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { name, description, status } = req.body;

        const main_thumbnail = getMultipleFilename(req, 'main_thumbnail');
        const sub_thumbnail = getMultipleFilename(req, 'sub_thumbnail');

        try {
            const existing = await prisma.template.findUnique({
                where: { id: Number(id) }
            });

            if (!existing) {
                return res.status(404).json({ message: 'Template not found' });
            }

            // Nếu có ảnh mới -> xóa ảnh cũ trong thư mục uploads/images
            if (main_thumbnail && existing.main_thumbnail) {
                deleteFileIfExist(existing.main_thumbnail);
            }

            if (sub_thumbnail && existing.sub_thumbnail) {
                deleteFileIfExist(existing.sub_thumbnail);
            }

            const updated = await prisma.template.update({
                where: { id: Number(id) },
                data: {
                    name,
                    description,
                    status,
                    main_thumbnail: main_thumbnail || existing.main_thumbnail,
                    sub_thumbnail: sub_thumbnail || existing.sub_thumbnail
                }
            });

            res.json({ data: updated });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Failed to update template' });
        }
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
}
export default new TemplateController();
