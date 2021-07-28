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

export async function banUser(id) {
    try {
        const response = await apiProvider.post(`users/${id}/ban`);
        return response;
    } catch (error) {
        console.error(error);
        console.log("Couldn't ban user.");
        return [];
    }
}
export async function unbanUser(id) {
    try {
        const response = await apiProvider.del(`users/${id}/ban`);
        return response;
    } catch (error) {
        console.error(error);
        console.log("Couldn't unban user.");
        return [];
    }
}
