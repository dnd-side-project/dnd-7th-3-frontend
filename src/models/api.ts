import { AxiosRequestConfig, Method } from 'axios';

export interface BaseHeader {
  ['Content-Type']: string;
  Accept: string;
}

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  url: string;
  method?: Method;
  isBFF?: boolean;
}
