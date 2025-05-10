import express from 'express';
import AuthController from '~/app/controllers/AuthController.ts';

const router = express.Router();

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.post('/logout', AuthController.logout);
router.post('/login-social', AuthController.loginSocial);
router.post('/refresh-token', AuthController.refrestToken);

export default router;
