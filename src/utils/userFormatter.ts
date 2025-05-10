export const filterAccountData = (user: any) => ({
    id: user.id,
    role: user.role,
    username: user.username,
    email: user.email,
    avatar: user.avatar
});
