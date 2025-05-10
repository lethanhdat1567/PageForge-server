import { Express } from 'express';
import testRouter from './test.ts';
import authRouter from './auth.ts';
import templateRouter from './template.ts';

function route(app: Express) {
    app.use('/', testRouter);
    app.use('/auth', authRouter);
    app.use('/templates', templateRouter);
}

export default route;
