import axios from 'axios';
import { apiKey } from '../config.json';

const authAxios = axios.create();

authAxios.interceptors.request.use(
  config => {
    config.params.apiKey = apiKey;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default authAxios;
