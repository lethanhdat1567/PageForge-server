import { Express } from 'express';
import testRouter from './test.ts';
import authRouter from './auth.ts';
import templateRouter from './template.ts';
import accountRouter from './account.ts';
import userTemplateRouter from './userTempate.ts';

function route(app: Express) {
    app.use('/', testRouter);
    app.use('/auth', authRouter);
    app.use('/templates', templateRouter);
    app.use('/account', accountRouter);
    app.use('/user-template', userTemplateRouter);
}

export default route;
