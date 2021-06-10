import axios from 'axios';
import { handleError, handleResponse } from './response';

const instance = axios.create({
  baseURL: 'https://sf-tdp2-gateway-dev.herokuapp.com',
});

const post = async (resource, payload) => {
  console.log(`Posting to: ${resource}`);
  try {
    const response = await instance.post(resource, payload);
    return await handleResponse(response);
  } catch (response) {
    return await handleError(response);
  }
};

const get = async (resource, params) => {
  try {
    const response = await instance.get(resource, params);
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
