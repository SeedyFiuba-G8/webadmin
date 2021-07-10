import apiProvider from './utilities/provider';

export async function getAllUsers() {
    try {
        const response = await apiProvider.get('users');
        return response.users;
    } catch (error) {
        console.error(error);
        console.log("Couldn't get users.");
        return [];
    }
}
