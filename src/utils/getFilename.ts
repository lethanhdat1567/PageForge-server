import { Request } from 'express';
import path from 'path';

type multerFieldType = {
    [fieldname: string]: Express.Multer.File[];
};

// Hàm trả về đường dẫn đầy đủ của file tải lên (single)
export const getSingleFilename = (req: Request) => {
    if (req.file) {
        return path.join('/uploads', 'images', req.file.filename);
    } else {
        return null;
    }
};

// Hàm trả về đường dẫn đầy đủ của file tải lên (multiple)
export const getMultipleFilename = (req: Request, fieldname: string) => {
    const files = req.files as multerFieldType;

    if (files && files[fieldname]) {
        return path.join('/uploads', 'images', files[fieldname][0].filename);
    } else {
        return null;
    }
};
