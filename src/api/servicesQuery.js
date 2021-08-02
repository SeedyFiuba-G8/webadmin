import apiProvider from './utilities/provider';

export async function getServices(path) {
    return apiProvider.get(path).catch((err) => {
        return;
    });
}
