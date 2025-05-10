import { Response } from 'express';

import { Prisma } from 'generated/prisma';

export const isPrismaClientKnownRequestError = (error: unknown): error is Prisma.PrismaClientKnownRequestError => {
    return error instanceof Prisma.PrismaClientKnownRequestError;
};

export const sendErrorResponse = (res: Response, message: string, statusCode: number, data?: any) => {
    const errorData = {
        message,
        status: statusCode,
        errors: data
    };

    return res.status(statusCode).json(errorData);
};
