import bcrypt from 'bcrypt';
const saltRound = 10;

export const hashPassword = (password: string) => bcrypt.hash(password, saltRound);

export const comparePassword = (password: string, hash: string) => bcrypt.compare(password, hash);
