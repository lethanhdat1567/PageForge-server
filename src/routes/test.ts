import express from 'express';
import { Request, Response } from 'express';

const router = express.Router();

router.get('/test', async (req: Request, res: Response) => {
    res.json({ data: 'Test API' });
});

export default router;
