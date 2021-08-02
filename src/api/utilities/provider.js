import axios from 'axios';
import _ from 'lodash';
import { handleError, handleResponse } from './response';

axios.defaults.baseURL = _.get(
    process.env,
    'BASE_URL',
    'https://sf-tdp2-gateway-dev.herokuapp.com'
);

const updateAuthToken = async () => {
    var token = localStorage.getItem('token');
    if (token) axios.defaults.headers['Authorization'] = `Bearer ${token}`;
    else axios.defaults.headers['Authorization'] = undefined;
};

const post = async (resource, payload) => {
    try {
        const response = await axios.post(resource, payload);
        return await handleResponse(response);
    } catch (response) {
        return await handleError(response);
    }
};

const get = async (resource, params) => {
    await updateAuthToken();
    try {
        const response = await axios.get(resource, { params: params });
        return await handleResponse(response);
    } catch (response) {
        return await handleError(response);
    }
};

const del = async (resource) => {
    try {
        const response = await axios.delete(resource);
        return await handleResponse(response);
    } catch (response) {
        return await handleError(response);
    }
};

const apiProvider = {
    post,
    get,
    del,
    updateAuthToken,
};

export default apiProvider;
