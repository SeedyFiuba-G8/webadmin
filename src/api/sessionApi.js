import apiProvider from './utilities/provider';

export default async function createSession(email, password) {
    try {
        const apiResponse = await apiProvider.post('admins/session', {
            email: email,
            password: password,
        });
        return {
            ...apiResponse,
            loginSuccessful: true,
        };
    } catch (error) {
        return {
            loginSuccessful: false,
        };
    }
}
