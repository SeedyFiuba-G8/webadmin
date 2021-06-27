import apiProvider from './utilities/provider';

export default async function createSession(email, password) {
    console.log(`Requesting session for: ${email}`);
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
        if (error.response) {
            console.log(error.response.status);
        }
        return {
            loginSuccessful: false,
        };
    }
}
