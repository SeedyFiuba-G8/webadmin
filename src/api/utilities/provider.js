import axios from 'axios';
import { handleError, handleResponse } from './response';

const BASE_URL = 'https://sf-tdp2-gateway-dev.herokuapp.com';

const post = async (resource, payload) => {
  console.log(`Posting to: ${resource}`);
  try {
    const response = await axios.post(`${BASE_URL}/${resource}`, payload);
    return await handleResponse(response);
  } catch (response) {
    return await handleError(response);
  }
};

const get = async (resource, payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/${resource}`, payload);
    return await handleResponse(response);
  } catch (response) {
    return await handleError(response);
  }
};

const apiProvider = {
  post,
  get,
};

export default apiProvider;
