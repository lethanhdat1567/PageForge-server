import { Request, Response } from 'express';

class HomeController {
    async index(req: Request, res: Response) {
        return res.json({ data: 'testToken' });
    }
}

export default new HomeController();
