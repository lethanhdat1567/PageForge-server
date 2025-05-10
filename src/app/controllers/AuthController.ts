import { Request, Response } from 'express';
import { PrismaClient } from 'generated/prisma';
import { envConfig } from '~/config';
import { comparePassword, hashPassword } from '~/utils/crypto';
import { signSessionToken, verifySessionToken } from '~/utils/jwt';
import { addMilliseconds } from 'date-fns';
import ms, { StringValue } from 'ms';
import { isPrismaClientKnownRequestError, sendErrorResponse } from '~/utils/errors';
import { PrismaErrorCode } from '~/constrant/error-reference';
import { JwtPayload } from 'jsonwebtoken';
import { filterAccountData } from '~/utils/userFormatter';

const prisma = new PrismaClient();

class AuthController {
    async register(req: Request, res: Response): Promise<any> {
        try {
            const body = req.body;
            const accessTokenExpiresIn = ms(envConfig.ACCESS_TOKEN_EXPIRES as StringValue);
            const refreshTokenExpiresIn = ms(envConfig.REFRESH_TOKEN_EXPIRES as StringValue);

            const hashedPassword = await hashPassword(body.password);

            const account = await prisma.user.create({
                data: {
                    username: body.username,
                    role: 1,
                    email: body.email,
                    avatar: body.avatar || null,
                    password: hashedPassword
                }
            });

            const accessToken = signSessionToken(
                { userId: account.id },
                envConfig.ACCESS_TOKEN_SECRET,
                envConfig.ACCESS_TOKEN_EXPIRES as StringValue
            );
            const refreshToken = signSessionToken(
                { userId: account.id },
                envConfig.REFRESH_TOKEN_SECRET,
                envConfig.REFRESH_TOKEN_EXPIRES as StringValue
            );

            await prisma.session.create({
                data: {
                    accountId: account.id,
                    session: refreshToken,
                    expiresAt: addMilliseconds(new Date(), refreshTokenExpiresIn)
                }
            });

            return res.json({
                data: {
                    account: filterAccountData(account),
                    token: {
                        accessToken,
                        refreshToken,
                        accessTokenExpiresIn
                    }
                }
            });
        } catch (error) {
            console.log(error);
            if (isPrismaClientKnownRequestError(error)) {
                if (error.code === PrismaErrorCode.UniqueConstraintViolation) {
                    return sendErrorResponse(res, 'Lỗi xác thực!', 422, [
                        { field: 'email', message: 'Email đã tồn tại' }
                    ]);
                }
            }
            return sendErrorResponse(res, 'Lỗi không xác định', 500);
        }
    }

    async loginSocial(req: Request, res: Response): Promise<any> {
        const { googleId, facebookId, email, username, avatar } = req.body;

        // Kiểm tra email
        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        if (!googleId && !facebookId) {
            return res.status(400).json({ error: 'No social UID provided' });
        }

        try {
            let user;

            // Kiểm tra theo googleId hoặc facebookId
            user = await prisma.user.findUnique({
                where: { email }
            });

            // Nếu không tìm thấy người dùng, tạo người dùng mới
            if (!user) {
                user = await prisma.user.create({
                    data: {
                        email,
                        role: 1,
                        username: username || 'Anonymous', // Nếu không có username thì dùng Anonymous
                        googleId: googleId || null,
                        facebookId: facebookId || null,
                        avatar: avatar || null,
                        password: null // Không cần mật khẩu cho social login
                    }
                });
            } else {
                // Cập nhật thông tin nếu người dùng đã tồn tại
                user = await prisma.user.update({
                    where: { id: user.id },
                    data: {
                        username: username || user.username, // Cập nhật username nếu có
                        avatar: avatar || user.avatar // Cập nhật avatar nếu có
                    }
                });
            }

            // Tạo JWT token (hoặc session token)
            const accessToken = signSessionToken(
                { userId: user.id },
                envConfig.ACCESS_TOKEN_SECRET,
                envConfig.ACCESS_TOKEN_EXPIRES as StringValue
            );
            const refreshToken = signSessionToken(
                { userId: user.id },
                envConfig.REFRESH_TOKEN_SECRET,
                envConfig.REFRESH_TOKEN_EXPIRES as StringValue
            );

            const accessTokenExpiresIn = ms(envConfig.ACCESS_TOKEN_EXPIRES as StringValue);
            const refreshTokenExpiresIn = ms(envConfig.REFRESH_TOKEN_EXPIRES as StringValue);

            await prisma.session.create({
                data: {
                    accountId: user.id,
                    session: refreshToken,
                    expiresAt: addMilliseconds(new Date(), refreshTokenExpiresIn)
                }
            });
            // Trả về dữ liệu người dùng và token
            return res.json({
                data: {
                    account: filterAccountData(user),
                    token: {
                        accessToken,
                        refreshToken,
                        accessTokenExpiresIn
                    }
                }
            });
        } catch (error: any) {
            console.error(error); // Ghi lỗi ra console

            // Trả về lỗi nếu có sự cố
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async login(req: Request, res: Response): Promise<any> {
        const body = req.body;
        const accessTokenExpiresIn = ms(envConfig.ACCESS_TOKEN_EXPIRES as StringValue);
        const refreshTokenExpiresIn = ms(envConfig.REFRESH_TOKEN_EXPIRES as StringValue);

        const account = await prisma.user.findUnique({
            where: {
                email: body.email
            }
        });
        if (!account) {
            return sendErrorResponse(res, 'Lỗi xác thực!', 422, [{ field: 'email', message: 'Email không tồn tại' }]);
        }
        if (!account.password) {
            return sendErrorResponse(res, 'Lỗi xác thực!', 422, [
                { field: 'email', message: 'Vui lòng đăng nhập bằng Google hoặc Facebook' }
            ]);
        }
        const validatePassword = await comparePassword(body.password, account.password as string);

        if (!validatePassword)
            return sendErrorResponse(res, 'Lỗi xác thực!', 422, [
                { field: 'password', message: 'Email hoặc mật khẩu không đúng' }
            ]);

        const accessToken = signSessionToken(
            { userId: account.id },
            envConfig.ACCESS_TOKEN_SECRET,
            envConfig.ACCESS_TOKEN_EXPIRES as StringValue
        );

        const refreshToken = signSessionToken(
            { userId: account.id },
            envConfig.REFRESH_TOKEN_SECRET,
            envConfig.REFRESH_TOKEN_EXPIRES as StringValue
        );

        await prisma.session.create({
            data: {
                accountId: account.id,
                session: refreshToken,
                expiresAt: addMilliseconds(new Date(), refreshTokenExpiresIn)
            }
        });

        return res.json({
            data: {
                account: filterAccountData(account),
                token: {
                    accessToken,
                    refreshToken,
                    accessTokenExpiresIn
                }
            }
        });
    }

    async refrestToken(req: Request, res: Response): Promise<any> {
        const refrestToken = req.body.refreshToken;
        if (!refrestToken) {
            return res.json({ message: 'Token not found', status: 401 });
        }

        const validToken = await prisma.session.findFirst({
            where: {
                session: refrestToken
            }
        });

        if (!validToken) {
            return res.json({ message: 'Invalid token', status: 401 });
        }

        try {
            // Verify token (kiểm tra chữ ký và hạn dùng)
            const decoded = verifySessionToken(refrestToken, process.env.REFRESH_TOKEN_SECRET!);
            const userId = (decoded as JwtPayload).userId;

            // Tạo access token mới
            const newAccessToken = signSessionToken(
                { userId },
                envConfig.ACCESS_TOKEN_SECRET,
                envConfig.ACCESS_TOKEN_EXPIRES as StringValue
            );
            const expiresInMs = ms(envConfig.ACCESS_TOKEN_EXPIRES as StringValue);
            const expiresAt = new Date(Date.now() + expiresInMs).toISOString();

            return res.json({
                message: 'Refresh successful',
                data: { accessToken: newAccessToken, expiresAt }
            });
        } catch (error) {
            console.error('Invalid or expired refresh token', error);
            return sendErrorResponse(res, 'Refresh token expired or invalid', 403);
        }
    }

    async logout(req: Request, res: Response): Promise<any> {
        const sessionToken = req.body.refreshToken;

        if (!sessionToken) {
            return res.status(400).json({
                status: 400,
                message: 'Session token is required'
            });
        }

        try {
            const session = await prisma.session.findUnique({
                where: {
                    session: sessionToken
                }
            });
            if (!session) {
                return res.status(404).json({
                    status: 404,
                    message: 'Session not found'
                });
            }

            // Xóa session token khỏi cơ sở dữ liệu
            await prisma.session.delete({
                where: {
                    session: sessionToken
                }
            });

            return res.json({
                status: 200,
                message: 'Logout success'
            });
        } catch (err) {
            console.error(err);
            return sendErrorResponse(res, 'Internal server error', 500);
        }
    }
}

export default new AuthController();
