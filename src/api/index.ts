import axios from 'axios';
import qs from 'qs';

import { BaseHeader, CustomAxiosRequestConfig } from '@/models/api';

const baseHeaders: BaseHeader = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const getUrl = (url: string, isBFF = false): string => {
  if (isBFF) {
    return `/api${url}`;
  }

  return `${process.env.NEXT_PUBLIC_API_HOST}${url}`;
};

export const paramsSerializer = (params: any): string => qs.stringify(params, { indices: false });

export async function api<T>(config: CustomAxiosRequestConfig): Promise<T> {
  const headers = { ...baseHeaders, ...config.headers };

  const isExternal = /(:\/\/|\/\/)/ig.test(config.url);

  if (isExternal) {
    throw new Error('External url is injected');
  }

  try {
    const { data } = await axios({
      ...config,
      headers,
      url: getUrl(config.url, config.isBFF),
      paramsSerializer,
    });

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}
