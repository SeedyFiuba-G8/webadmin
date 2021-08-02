import registerSession from '../../api/registerQuery';

export default async function registerHandler(
    email,
    password,
    setErrorOpen,
    setSuccessOpen,
    setPassword,
    setEmail,
    setError
) {
    var response = await registerSession(email, password);
    setPassword('');
    setEmail('');
    if (response.registerSuccessful) {
        setSuccessOpen(true);
    } else {
        setErrorOpen(true);
        setError(response.error);
    }
}
