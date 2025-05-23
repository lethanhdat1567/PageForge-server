import express from 'express';
import UserTemplateController from '~/app/controllers/UserTemplateController';

const router = express.Router();
router.get('/template-by-store', UserTemplateController.getTemplateByStore);

// Lấy danh sách tất cả UserTemplate
router.get('/', UserTemplateController.index);

// Lấy thông tin UserTemplate theo ID (userId và templateId)
router.get('/:userId', UserTemplateController.show);

// Tạo mới một UserTemplate
router.post('/', UserTemplateController.create);

// Cập nhật trạng thái của UserTemplate của người dùng (patch chỉ sửa phần cần thay đổi)
router.patch('/user/:userId/:templateId', UserTemplateController.updateForUser);

// Cập nhật trạng thái của UserTemplate (patch chỉ sửa phần cần thay đổi)
router.patch('/:userId/:templateId', UserTemplateController.update);

// Xóa một UserTemplate
router.delete('/:id', UserTemplateController.destroy);

export default router;
