import apiProvider from './utilities/provider';

export async function getServices() {
    try {
        const response = await apiProvider.get('health');
        return response.services;
    } catch (error) {
        console.error(error);
        console.log("Couldn't get services.");
        return [];
    }
}
