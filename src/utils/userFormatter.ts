export const filterAccountData = (user: any) => ({
    id: user.id,
    storename: user.storename,
    role: user.role,
    username: user.username,
    email: user.email,
    avatar: user.avatar
});
