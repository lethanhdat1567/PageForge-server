import { Request, Response, NextFunction } from 'express';

export function responseFormatter(req: Request, res: Response, next: NextFunction) {
    const originalJson = res.json;

    res.json = function (body: any): Response<any> {
        const statusCode = res.statusCode || 200;
        res.status(statusCode);

        // Define the formatted response structure
        const formattedResponse: any = {
            message: body.message || 'Request completed successfully',
            status: statusCode || 200
        };

        // If it's an error, remove the `data` field and add `errors`
        if (statusCode >= 400 && body.errors) {
            formattedResponse.errors = body.errors || null;
        } else {
            // If it's a successful response, remove `errors` and add `data`
            formattedResponse.data = body.data || null;
        }

        // Send the formatted response
        return originalJson.call(this, formattedResponse);
    };

    next();
}
