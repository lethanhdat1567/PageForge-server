import express from 'express';
import ReviewController from '~/app/controllers/ReviewController';

const router = express.Router();

// Lấy tất cả reviews (có thể filter theo rating, template_id, user_template_id, v.v.)
router.get('/', ReviewController.index);

// Lấy 1 review cụ thể
router.get('/:id', ReviewController.show);

// Lấy tất cả reviews của 1 template cụ thể
router.get('/by-template/:template_id', ReviewController.showByTemplateId);

// Tạo review mới
router.post('/', ReviewController.create);

// Cập nhật review
router.put('/:id', ReviewController.update);

// Xóa 1 review
router.delete('/:id', ReviewController.delete);

// Xóa nhiều reviews (bulk)
router.post('/bulk-delete', ReviewController.bulkDelete);

export default router;
