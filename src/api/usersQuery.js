import apiProvider from './utilities/provider';

export async function getAllUsers() {
    try {
        const user = await apiProvider.get('user');
        return user.users;
    } catch (error) {
        console.error(error);
        console.log("Couldn't get users.");
        return [];
    }
}
