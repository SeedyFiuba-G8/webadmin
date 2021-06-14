import axios from 'axios';
import { handleError, handleResponse } from './response';

axios.defaults.baseURL = 'https://sf-tdp2-gateway-dev.herokuapp.com';

const updateAuthToken = async () => {
    var token = localStorage.getItem('token');
    console.log(`Setting auth token: ${token}`);
    if (token) axios.defaults.headers['Authorization'] = `Bearer ${token}`;
    else axios.defaults.headers['Authorization'] = undefined;
};

const post = async (resource, payload) => {
    console.log(`Posting to: ${resource}`);
    try {
        const response = await axios.post(resource, payload);
        return await handleResponse(response);
    } catch (response) {
        return await handleError(response);
    }
};

const get = async (resource, params) => {
    console.log(`Getting: ${resource}`);
    await updateAuthToken();
    try {
        const response = await axios.get(resource, { params: params });
        return await handleResponse(response);
    } catch (response) {
        return await handleError(response);
    }
};

const apiProvider = {
    post,
    get,
    updateAuthToken,
};

export default apiProvider;
