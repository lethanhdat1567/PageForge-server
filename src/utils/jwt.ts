import { StringValue } from 'ms';
import jwt from 'jsonwebtoken';

export const signSessionToken = (payload: { userId: number }, type: string, expiresIn: StringValue) => {
    const token = jwt.sign(payload, type, { expiresIn });

    return token;
};

export const verifySessionToken = (sessionToken: string, type: string) => {
    try {
        const decoded = jwt.verify(sessionToken, type);

        return decoded;
    } catch (error) {
        console.log(error);
        throw new Error('Invalid or expired session token');
    }
};
