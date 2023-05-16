import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export const get = async (url: string, config?: any) => {
  try {
    const response = await api.get(url, config);
    return response.data;
  } catch (err) {
    return null;
  }
};

export const post = async (url: string, data?: any, config?: any) => {
  try {
    const response = await api.post(url, data, config);
    return response;
  } catch (err) {
    return null;
  }
};

export const put = async (url: string, data?: any, config?: any) => {
  try {
    const response = await api.put(url, data, config);
    return response.data;
  } catch (err) {
    return null;
  }
};

export const del = async (url: string, config?: any) => {
  try {
    const response = await api.delete(url, config);
    return response.data;
  } catch (err) {
    return null;
  }
};
