import axios, { AxiosRequestConfig } from 'axios';
import { QueryClient } from 'react-query';

import { LinksApi } from 'types/types';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },

    mutations: {
      retry: 0,
    },
  },
});

export const Axios = axios.create({
  withCredentials: true,
  baseURL: LinksApi.BASE_URL,
});

Axios.interceptors.response.use((config) => {
  return config.data;
});

Axios.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

    return config;
  },
  (error) => error
);
