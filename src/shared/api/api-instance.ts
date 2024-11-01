import type { AxiosError, AxiosRequestConfig } from 'axios';
import axios from 'axios';
const apiInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createInstance = async <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  const r = await apiInstance({
    ...config,
    ...options,
  });
  return r.data;
};

export type BodyType<Data> = Data;
export type ErrorType<Error> = AxiosError<Error>;
