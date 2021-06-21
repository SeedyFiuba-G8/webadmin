import apiProvider from './utilities/fakeProvider';

export function getAllUsers() {
    return apiProvider.get('user').users;
}
