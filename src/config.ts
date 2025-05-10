import dotenv from 'dotenv';
import z from 'zod';

dotenv.config();

const configSchema = z.object({
    PORT: z.coerce.number().default(8000),
    ACCESS_TOKEN_SECRET: z.string(),
    ACCESS_TOKEN_EXPIRES: z.string(),
    REFRESH_TOKEN_SECRET: z.string(),
    REFRESH_TOKEN_EXPIRES: z.string()
});

const configServer = configSchema.safeParse(process.env);

if (!configServer.success) {
    console.log(configServer.error.issues);
    throw new Error('Các giá trị khai báo trong file .env không hợp lệ');
}

export const envConfig = configServer.data;
