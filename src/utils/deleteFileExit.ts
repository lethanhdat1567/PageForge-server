import fs from 'fs';
import path from 'path';

const deleteFileIfExist = async (fileName: string) => {
    // Đảm bảo bỏ phần "/" ở đầu filename và lấy đường dẫn tuyệt đối
    const normalizedPath = fileName.replace(/\\/g, '/').replace(/^\/+/, '');
    const filePath = path.join(__dirname, '../../', normalizedPath);

    console.log(`Attempting to delete file at: ${filePath}`);

    try {
        // Kiểm tra sự tồn tại của file
        const fileExists = fs.existsSync(filePath);
        console.log(`File exists: ${fileExists}`);

        if (fileExists) {
            await fs.promises.unlink(filePath); // Sử dụng promises để await
            console.log(`File deleted: ${fileName}`);
        } else {
            console.log(`File not found: ${fileName}`);
        }
    } catch (err) {
        console.error(`Error deleting file: ${fileName}`, err);
    }
};

export default deleteFileIfExist;
