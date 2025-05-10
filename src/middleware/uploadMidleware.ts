// src/middlewares/uploadMiddleware.ts
import multer from 'multer';
import path from 'path';

// Cấu hình lưu trữ ảnh
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/images'); // Lưu trong thư mục 'uploads/images'
    },
    filename: (req, file, cb) => {
        const originalName = Date.now() + path.extname(file.originalname);
        cb(null, originalName);
    }
});

// Tạo instance multer với cấu hình trên
const upload = multer({ storage: storage });

export default upload;
