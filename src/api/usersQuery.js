import apiProvider from './utilities/provider';

export async function getAllUsers(config) {
    try {
        const response = await apiProvider.get('users', config);
        return response.users;
    } catch (error) {
        console.error(error);
        console.log("Couldn't get users.");
        return [];
    }
}

export async function getUser(id) {
    try {
        const user = await apiProvider.get(`users/${id}`);
        return user;
    } catch (error) {
        console.error(error);
        console.log("Couldn't get user.");
        return [];
    }
}
