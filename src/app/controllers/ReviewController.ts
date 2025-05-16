import { Request, Response } from 'express';
import prisma from '~/prismaClient';

class ReviewController {
    async index(req: Request, res: Response): Promise<any> {
        try {
            const { rating } = req.query;

            const where: any = {};
            if (rating) where.rating = rating;

            const reviews = await prisma.review.findMany({
                where,
                include: {
                    user: true,
                    userTemplate: {
                        include: {
                            template: true
                        }
                    },
                    replies: true
                },
                orderBy: { created_at: 'desc' }
            });

            return res.json({ data: reviews });
        } catch (error) {
            console.error('Error lấy danh sách review:', error);
            return res.status(500).json({ data: null, error: 'Lỗi server' });
        }
    }

    async show(req: Request, res: Response): Promise<any> {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ data: null, error: 'ID không hợp lệ' });
            }

            const review = await prisma.review.findUnique({
                where: { id }
            });

            if (!review) {
                return res.status(404).json({ data: null, error: 'Review không tồn tại' });
            }

            return res.json({ data: review });
        } catch (error) {
            console.error('Error lấy review:', error);
            return res.status(500).json({ data: null, error: 'Lỗi server' });
        }
    }

    async showByTemplateId(req: Request, res: Response): Promise<any> {
        try {
            const templateId = Number(req.params.template_id);
            if (isNaN(templateId)) {
                return res.status(400).json({ data: null, error: 'template_id không hợp lệ' });
            }

            const reviews = await prisma.review.findMany({
                where: {
                    userTemplate: {
                        template_id: templateId
                    }
                },
                include: {
                    user: true
                },
                orderBy: { created_at: 'desc' }
            });

            return res.json({ data: reviews });
        } catch (error) {
            console.error('Error lấy reviews theo template_id:', error);
            return res.status(500).json({ data: null, error: 'Lỗi server' });
        }
    }

    async create(req: Request, res: Response): Promise<any> {
        try {
            const { user_id, user_template_id, rating, content, parent_id } = req.body;

            if (!user_id || !user_template_id || !rating) {
                return res.status(400).json({ data: null, error: 'Thiếu thông tin bắt buộc' });
            }

            const newReview = await prisma.review.create({
                data: {
                    user_id,
                    user_template_id,
                    rating,
                    content,
                    parent_id: parent_id ?? null
                }
            });

            return res.status(201).json({ data: newReview });
        } catch (error) {
            console.error('Error tạo review:', error);
            return res.status(500).json({ data: null, error: 'Lỗi server' });
        }
    }

    async update(req: Request, res: Response): Promise<any> {
        try {
            const id = Number(req.params.id);
            const { rating, content } = req.body;

            if (isNaN(id)) {
                return res.status(400).json({ data: null, error: 'ID không hợp lệ' });
            }

            const updated = await prisma.review.update({
                where: { id },
                data: {
                    rating,
                    content,
                    updated_at: new Date()
                }
            });

            return res.json({ data: updated });
        } catch (error) {
            console.error('Error cập nhật review:', error);
            return res.status(500).json({ data: null, error: 'Lỗi server' });
        }
    }

    async delete(req: Request, res: Response): Promise<any> {
        try {
            const id = Number(req.params.id);

            if (isNaN(id)) {
                return res.status(400).json({ data: null, error: 'ID không hợp lệ' });
            }

            await prisma.review.deleteMany({
                where: {
                    OR: [{ id }, { parent_id: id }]
                }
            });

            return res.json({ data: 'Xóa review thành công' });
        } catch (error) {
            console.error('Error xóa review:', error);
            return res.status(500).json({ data: null, error: 'Lỗi server' });
        }
    }

    async bulkDelete(req: Request, res: Response): Promise<any> {
        try {
            const { ids } = req.body;

            if (!Array.isArray(ids) || ids.some((id) => typeof id !== 'number')) {
                return res.status(400).json({ data: null, error: 'Dữ liệu ids không hợp lệ' });
            }

            await prisma.review.deleteMany({
                where: {
                    OR: [{ id: { in: ids } }, { parent_id: { in: ids } }]
                }
            });

            return res.json({ data: `Xóa thành công ${ids.length} reviews` });
        } catch (error) {
            console.error('Error bulk delete reviews:', error);
            return res.status(500).json({ data: null, error: 'Lỗi server' });
        }
    }
}

export default new ReviewController();
