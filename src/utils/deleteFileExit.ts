import fs from 'fs';
import path from 'path';

const deleteFileIfExist = async (fileName: string) => {
    // Đảm bảo đường dẫn sử dụng dấu / và chuẩn hóa lại fileName
    const normalizedPath = fileName.replace(/\\/g, '/').replace(/^\/+/, '');
    const filePath = path.resolve(__dirname, '../../', normalizedPath); // Dùng resolve để có đường dẫn tuyệt đối

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
