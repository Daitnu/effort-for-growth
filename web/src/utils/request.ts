import axios, { AxiosInstance } from 'axios';
import { errorParser } from './error/error-parser';
import HTTPResponse from './http-response';

const API_SERVER: string = 'http://localhost/graphql';

interface Irequest {
  url: string;
  body?: object;
  options?: object;
}

const execute = async (fn: Function) => {
  let response: HTTPResponse;

  try {
    const { data } = await fn();
    response = new HTTPResponse(false, data);
  } catch (err) {
    const error = errorParser(err);
    response = new HTTPResponse(true, error);
  }
  return response;
};

// axios.defaults.withCredentials = true;

const server: AxiosInstance = axios.create({
  baseURL: API_SERVER,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json; charset=utf-8',
  },
});

export default {
  async get({ url, options }: Irequest) {
    const fn = () => server.get(url, { ...options });
    const response = await execute(fn);
    return response;
  },

  async post({ url, body, options }: Irequest) {
    const fn = () => server.post(url, body, { ...options });
    const response = await execute(fn);
    return response;
  },

  async put({ url, body, options = {} }: Irequest) {
    const fn = () => server.put(url, body, { ...options });
    const response = await execute(fn);
    return response;
  },

  async delete({ url, body, options = {} }: Irequest) {
    const fn = () => server.delete(url, { data: body, headers: { ...options } });
    const response = await execute(fn);
    return response;
  },

  async patch({ url, body, options = {} }: Irequest) {
    const fn = () => server.patch(url, body, { ...options });
    const response = await execute(fn);
    return response;
  },
};
