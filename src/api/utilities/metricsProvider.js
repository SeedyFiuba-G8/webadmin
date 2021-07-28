import axios from 'axios';
import { handleError, handleResponse } from './response';

axios.defaults.baseURL = 'https://sf-tdp2-gateway-dev.herokuapp.com';

const metricsSerializer = ({ initialDate, finalDate, userId }) => {
    const initialDateQuery = `initialDate=${encodeURIComponent(
        initialDate.toJSON()
    )}`;
    const finalDateQuery =
        finalDate !== undefined
            ? `&finalDate=${encodeURIComponent(finalDate.toJSON())}`
            : '';
    const userIdQuery = userId !== undefined ? `&userId=${userId}` : '';

    return initialDateQuery + finalDateQuery + userIdQuery;
};

const updateAuthToken = async () => {
    var token = localStorage.getItem('token');
    console.log(`Setting auth token: ${token}`);
    if (token) axios.defaults.headers['Authorization'] = `Bearer ${token}`;
    else axios.defaults.headers['Authorization'] = undefined;
};

const get = async (resource, params) => {
    console.log(`Getting: ${resource}`);
    await updateAuthToken();
    try {
        const response = await axios.get(resource, {
            paramsSerializer: metricsSerializer,
            params: params,
        });
        return await handleResponse(response);
    } catch (response) {
        return await handleError(response);
    }
};

const metricsApiProvider = {
    get,
    updateAuthToken,
};

export default metricsApiProvider;
