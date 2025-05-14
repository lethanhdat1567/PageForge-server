import { Request, Response } from 'express';
import prisma from '~/prismaClient';
import deleteFileIfExist from '~/utils/deleteFileExit';
import { getSingleFilename } from '~/utils/getFilename';

class AccountController {
    // GET /accounts
    async index(req: Request, res: Response) {
        try {
            const users = await prisma.user.findMany();
            res.json({ data: users });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to fetch users' });
        }
    }

    // GET /accounts/:id
    async show(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        try {
            const user = await prisma.user.findUnique({
                where: { id: Number(id) },
                select: {
                    id: true,
                    storename: true,
                    username: true,
                    email: true,
                    role: true,
                    avatar: true,
                    created_at: true,
                    updated_at: true
                }
            });
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.json({ data: user });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to fetch user' });
        }
    }

    // PUT /accounts/:id
    async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { username, storename, email, password, role } = req.body;

        const avatar = getSingleFilename(req);

        try {
            const existingUser = await prisma.user.findUnique({
                where: { id: Number(id) }
            });

            if (!existingUser) {
                if (avatar) deleteFileIfExist(avatar);
                return res.status(404).json({ message: 'User not found' });
            }

            // Nếu có ảnh mới -> xóa ảnh cũ
            if (avatar && existingUser.avatar) {
                deleteFileIfExist(existingUser.avatar);
            }

            // Gom data và loại bỏ các field không có giá trị
            const data: any = {
                username,
                storename,
                email,
                password,
                role: role !== undefined ? Number(role) : undefined,
                avatar: avatar || existingUser.avatar
            };

            Object.keys(data).forEach((key) => {
                if (data[key] === undefined || data[key] === '') {
                    delete data[key];
                }
            });

            const updatedUser = await prisma.user.update({
                where: { id: Number(id) },
                data
            });

            res.json({ data: updatedUser });
        } catch (error) {
            console.error(error);
            if (avatar) deleteFileIfExist(avatar);
            res.status(500).json({ message: 'Failed to update user' });
        }
    }

    // DELETE /accounts/:id
    async destroy(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        try {
            const existingUser = await prisma.user.findUnique({
                where: { id: Number(id) }
            });

            if (!existingUser) return res.status(404).json({ message: 'User not found' });

            if (existingUser.avatar) deleteFileIfExist(existingUser.avatar);

            await prisma.user.delete({
                where: { id: Number(id) }
            });

            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to delete user' });
        }
    }
}

export default new AccountController();
