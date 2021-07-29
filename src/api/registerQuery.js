import apiProvider from './utilities/provider';

export default async function registerSession(email, password) {
    console.log(`Requesting session for: ${email}`);
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
        console.error(error);
        console.log("Couldn't register admins");
        return {
            error: { ...error.response.data },
            registerSuccessful: false,
        };
    }
}
