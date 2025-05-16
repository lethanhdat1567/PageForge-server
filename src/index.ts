import express from 'express';
import { envConfig } from '~/config';
import { authenticateToken } from '~/middleware/authMiddleware';
import { responseFormatter } from '~/middleware/responeFormatter';
import cors from 'cors';
import route from '~/routes';
import path from 'path';

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: 'http://localhost:3000', // Thay đổi với domain của bạn
        methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'], // Các method cho phép
        allowedHeaders: ['Content-Type', 'Authorization'] // Các header cho phép
    })
);
const port = envConfig?.PORT;
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// Middleware
app.use(authenticateToken);
app.use(responseFormatter);

// Router
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
