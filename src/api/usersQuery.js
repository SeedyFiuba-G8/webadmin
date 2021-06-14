import apiProvider from './utilities/fakeProvider';

export async function getAllUsers() {
    try {
        const user = await apiProvider.get('users');
        return user.users;
    } catch (error) {
        console.error(error);
        console.log("Couldn't get users.");
        return [];
    }
}
