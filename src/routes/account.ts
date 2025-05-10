import express from 'express';
import AccountController from '~/app/controllers/AccountController';
import upload from '~/middleware/uploadMidleware';

const router = express.Router();

router.get('/', AccountController.index);

router.get('/:id', AccountController.show);

router.patch('/:id', upload.single('avatar'), AccountController.update);

router.delete('/:id', AccountController.destroy);

export default router;
