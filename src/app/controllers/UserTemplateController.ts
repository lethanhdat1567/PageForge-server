import { Request, Response } from 'express';
import prisma from '~/prismaClient';

class UserTemplateController {
    // Lấy danh sách tất cả UserTemplate
    async index(req: Request, res: Response): Promise<any> {
        try {
            const userTemplates = await prisma.userTemplate.findMany({
                include: {
                    user: true,
                    template: true
                }
            });

            return res.json({ data: userTemplates });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to retrieve all user templates' });
        }
    }

    // Lấy thông tin UserTemplate theo userId và templateId
    async show(req: Request, res: Response): Promise<any> {
        const { userId } = req.params;

        try {
            const userTemplate = await prisma.userTemplate.findMany({
                where: {
                    user_id: Number(userId)
                },
                include: {
                    user: true,
                    template: true
                }
            });

            if (!userTemplate) {
                return res.status(404).json({ message: 'UserTemplate not found' });
            }

            return res.json({ data: userTemplate });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to retrieve user template' });
        }
    }

    async getTemplateByStore(req: Request, res: Response): Promise<any> {
        try {
            const storename = req.query.store as string;

            if (!storename) {
                return res.status(400).json({ data: 'Missing storename' });
            }

            // 1. Tìm user theo storename
            const user = await prisma.user.findUnique({
                where: { storename }
            });

            if (!user) {
                return res.status(404).json({ data: 'User not found' });
            }

            // 2. Tìm template_id trong user_template có status = 'active'
            const activeUserTemplate = await prisma.userTemplate.findFirst({
                where: {
                    user_id: user.id,
                    status: 'active'
                }
            });

            if (!activeUserTemplate) {
                return res.status(404).json({ data: 'No active template found for this user' });
            }

            // 3. Lấy tên template từ bảng templates
            const template = await prisma.template.findUnique({
                where: { id: activeUserTemplate.template_id }
            });

            if (!template) {
                return res.status(404).json({ data: 'Template not found' });
            }

            return res.status(200).json({ data: { template: template } });
        } catch (error) {
            console.error('getTemplateByStore error:', error);
            return res.status(500).json({ data: 'Internal server error' });
        }
    }

    // Tạo mới một UserTemplate
    async create(req: Request, res: Response): Promise<any> {
        const { userId, templateId, status } = req.body;

        if (!userId || !templateId || !status) {
            return res.status(400).json({ message: 'userId, templateId, and status are required' });
        }

        try {
            // Kiểm tra xem đã tồn tại userTemplate này chưa
            const existing = await prisma.userTemplate.findUnique({
                where: {
                    user_id_template_id: {
                        user_id: Number(userId),
                        template_id: Number(templateId)
                    }
                }
            });

            if (existing) {
                return res.status(200).json({ message: 'UserTemplate already exists', data: existing });
            }

            const newUserTemplate = await prisma.userTemplate.create({
                data: {
                    user_id: Number(userId),
                    template_id: Number(templateId),
                    status
                }
            });

            return res.status(201).json({ data: newUserTemplate });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to create user template' });
        }
    }

    // Cập nhật trạng thái UserTemplate
    async update(req: Request, res: Response): Promise<any> {
        const { userId, templateId } = req.params;
        const { status } = req.body;

        if (!status || (status !== 'active' && status !== 'inactive')) {
            return res.status(400).json({ message: 'Invalid status. It must be either "active" or "inactive"' });
        }

        try {
            const updatedUserTemplate = await prisma.userTemplate.update({
                where: {
                    user_id_template_id: {
                        user_id: Number(userId),
                        template_id: Number(templateId)
                    }
                },
                data: {
                    status
                }
            });

            return res.json({ data: updatedUserTemplate });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to update user template' });
        }
    }

    async updateForUser(req: Request, res: Response): Promise<any> {
        const { userId, templateId } = req.params;

        try {
            const existingActive = await prisma.userTemplate.findFirst({
                where: {
                    user_id: Number(userId),
                    status: 'active'
                }
            });

            if (existingActive && existingActive.template_id !== Number(templateId)) {
                await prisma.userTemplate.update({
                    where: {
                        user_id_template_id: {
                            user_id: Number(userId),
                            template_id: existingActive.template_id
                        }
                    },
                    data: {
                        status: 'inactive'
                    }
                });
            }

            const updatedTemplate = await prisma.userTemplate.update({
                where: {
                    user_id_template_id: {
                        user_id: Number(userId),
                        template_id: Number(templateId)
                    }
                },
                data: {
                    status: 'active'
                }
            });

            return res.json({ data: updatedTemplate });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to switch active template' });
        }
    }

    // Xóa UserTemplate
    async destroy(req: Request, res: Response): Promise<any> {
        const { id } = req.params;

        try {
            const deletedUserTemplate = await prisma.userTemplate.delete({
                where: { id: Number(id) }
            });

            return res.json({ message: 'UserTemplate deleted successfully', data: deletedUserTemplate });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to delete user template' });
        }
    }
}

export default new UserTemplateController();
