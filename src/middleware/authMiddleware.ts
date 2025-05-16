import { Request, Response, NextFunction } from 'express';
import { verifySessionToken } from '~/utils/jwt';

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
    const publicPaths = [
        '/auth/login',
        '/auth/login-social',
        '/auth/register',
        '/auth/refresh-token',
        '/auth/logout',
        '/template-by-store',
        '/user-template/template-by-store'
    ];

    const startsWithPaths = ['/uploads', '/templates', '/reviews'];
    console.log('PATH:', req.path);

    // Nếu path khớp chính xác hoặc bắt đầu bằng các path công khai
    if (publicPaths.includes(req.path) || startsWithPaths.some((path) => req.path.startsWith(path))) {
        next();
        return;
    }

    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];

    if (!token) {
        res.status(401).json({ message: 'Unauthorized: No token provided' });
        return;
    }

    try {
        const decoded = verifySessionToken(token, process.env.ACCESS_TOKEN_SECRET!);
        (req as any).user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ message: 'Forbidden: Invalid token' });
        throw err;
    }
};
