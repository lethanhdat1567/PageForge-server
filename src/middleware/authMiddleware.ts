import { Request, Response, NextFunction } from 'express';
import { verifySessionToken } from '~/utils/jwt';

const excludedPath = ['/auth/login', '/auth/login-social', '/auth/register', '/auth/refresh-token', '/auth/logout'];

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
    if (excludedPath.includes(req.path) || req.path.startsWith('/uploads')) {
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
