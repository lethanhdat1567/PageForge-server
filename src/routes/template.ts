// src/routes/templateRoutes.ts
import express from 'express';
import TemplateController from '~/app/controllers/TemplateController';
import upload from '~/middleware/uploadMidleware';

const router = express.Router();

router.get('/:id', TemplateController.show);

router.get('/', TemplateController.index);

router.post(
    '/',
    upload.fields([
        { name: 'main_thumbnail', maxCount: 1 },
        { name: 'sub_thumbnail', maxCount: 1 }
    ]),
    TemplateController.create
);

router.put(
    '/:id',
    upload.fields([
        { name: 'main_thumbnail', maxCount: 1 },
        { name: 'sub_thumbnail', maxCount: 1 }
    ]),
    TemplateController.update
);

router.delete('/:id', TemplateController.destroy);

export default router;
