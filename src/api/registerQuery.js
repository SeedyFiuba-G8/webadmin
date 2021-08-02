import apiProvider from './utilities/provider';

export default async function registerSession(email, password) {
    try {
        const apiResponse = await apiProvider.post('admins', {
            email: email,
            password: password,
        });
        return {
            ...apiResponse,
            registerSuccessful: true,
        };
    } catch (error) {
        return {
            error: { ...error.response.data },
            registerSuccessful: false,
        };
    }
}
