import { Request, Response } from 'express';
import prisma from '~/prismaClient';

class ReviewController {
    // Lấy danh sách review chính, có kèm replies
    async index(req: Request, res: Response): Promise<any> {
        try {
            const { rating } = req.query;

            const where: any = { parent_id: null }; // chỉ lấy review chính
            if (rating) where.rating = Number(rating);

            const reviews = await prisma.review.findMany({
                where,
                include: {
                    user: true,
                    template: true,
                    replies: {
                        include: {
                            user: true
                        },
                        orderBy: { created_at: 'asc' } // trả replies theo thứ tự thời gian
                    }
                },
                orderBy: { created_at: 'desc' }
            });

            return res.json({ data: reviews });
        } catch (error) {
            console.error('Error lấy danh sách review:', error);
            return res.status(500).json({ data: null, error: 'Lỗi server' });
        }
    }

    // Lấy review theo id, bao gồm replies
    async show(req: Request, res: Response): Promise<any> {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ data: null, error: 'ID không hợp lệ' });
            }

            const review = await prisma.review.findUnique({
                where: { id },
                include: {
                    user: true,
                    template: true,
                    replies: {
                        include: { user: true },
                        orderBy: { created_at: 'asc' }
                    }
                }
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

    // Lấy review theo template_id, chỉ review chính kèm replies
    async showByTemplateId(req: Request, res: Response): Promise<any> {
        try {
            const templateId = Number(req.params.template_id);
            if (isNaN(templateId)) {
                return res.status(400).json({ data: null, error: 'template_id không hợp lệ' });
            }

            const reviews = await prisma.review.findMany({
                where: {
                    template_id: templateId,
                    parent_id: null // chỉ review chính
                },
                include: {
                    user: true,
                    replies: {
                        include: { user: true },
                        orderBy: { created_at: 'asc' }
                    }
                },
                orderBy: { created_at: 'desc' }
            });

            return res.json({ data: reviews });
        } catch (error) {
            console.error('Error lấy reviews theo template_id:', error);
            return res.status(500).json({ data: null, error: 'Lỗi server' });
        }
    }

    // Tạo review mới (review chính hoặc reply)
    async create(req: Request, res: Response): Promise<any> {
        try {
            const { user_id, template_id, rating, content, parent_id } = req.body;

            if (!user_id || !template_id || !rating) {
                return res.status(400).json({ data: null, error: 'Thiếu thông tin bắt buộc' });
            }

            const newReview = await prisma.review.create({
                data: {
                    user_id,
                    template_id,
                    rating,
                    content,
                    parent_id: parent_id ?? null // nếu có parent_id là reply, không có là review chính
                }
            });

            return res.status(201).json({ data: newReview });
        } catch (error) {
            console.error('Error tạo review:', error);
            return res.status(500).json({ data: null, error: 'Lỗi server' });
        }
    }

    // Cập nhật review theo id
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

    // Xóa review theo id, bao gồm cả replies con
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

    // Xóa nhiều review cùng lúc, bao gồm replies con
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

    // Analysh review
    async analysh(req: Request, res: Response): Promise<any> {
        try {
            const templateId = Number(req.params.template_id);
            if (isNaN(templateId)) {
                return res.status(400).json({ error: 'template_id không hợp lệ' });
            }

            // Đếm số lượng từng loại rating
            const result = await prisma.review.groupBy({
                by: ['rating'],
                where: {
                    template_id: templateId
                },
                _count: {
                    rating: true
                }
            });

            // Chuẩn hóa dữ liệu trả về
            const data = {
                good: 0,
                neutral: 0,
                bad: 0,
                total: 0
            };

            for (const item of result) {
                const rating = item.rating as 'good' | 'neutral' | 'bad';
                data[rating] = item._count.rating;
                data.total += item._count.rating;
            }

            return res.json({ data });
        } catch (error) {
            console.error('Error lấy thống kê reviews:', error);
            return res.status(500).json({ data: null, error: 'Lỗi server' });
        }
    }
}

export default new ReviewController();
