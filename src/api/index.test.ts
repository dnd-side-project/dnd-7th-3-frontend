import mockAxios from 'axios';
import qs from 'qs';

import { CustomAxiosRequestConfig } from '@/models/api';

import { api, getUrl, paramsSerializer } from '.';

jest.mock('axios');

const mockResponse = {
  data: 'mockData',
};

describe('paramsSerializer', () => {
  it('"qs.stringify"를 호출해야만 한다', () => {
    const qsSpyOn = jest.spyOn(qs, 'stringify');
    const params = {
      param1: 'apple',
      param2: 'banana',
      param3: 'orange',
    };

    const result = paramsSerializer(params);

    expect(result).toBe('param1=apple&param2=banana&param3=orange');
    expect(qsSpyOn).toBeCalledWith(params, {
      indices: false,
    });
  });
});

describe('getUrl', () => {
  const path = '/path';

  context('isBFF가 true인 경우', () => {
    it('url 앞에 "/api"가 붙어서 반환해야만 한다', () => {
      const url = getUrl('/path', true);

      expect(url).toBe(`/api${path}`);
    });
  });

  context('isBFF가 false인 경우', () => {
    const BASE_URL = 'http://15.164.216.101';

    it('url 앞에 BASE_URL이 붙어서 반환해야만 한다', () => {
      const url = getUrl('/path');

      expect(url).toBe(`${BASE_URL}${path}`);
    });
  });
});

describe('api', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (mockAxios as unknown as jest.Mock).mockResolvedValue(mockResponse);
  });

  const mockAxiosRequestConfig = (url: string, params?: string): CustomAxiosRequestConfig => ({
    url,
    method: 'get',
    params,
  });

  context('올바른 URL인 경우', () => {
    it('axios가 호출되야만 한다', async () => {
      const response = await api<typeof mockResponse>(mockAxiosRequestConfig('/test/test', 'test'));

      expect(response).toBe(mockResponse.data);
      expect(mockAxios).toBeCalledTimes(1);
    });
  });

  context('올바르지 않은 URL인 경우', () => {
    it('에러가 던저져야 한다', async () => {
      const throwErrorApiResponse = () => api<typeof mockResponse>(mockAxiosRequestConfig('http://www.test.com', 'test'));

      await expect(throwErrorApiResponse).rejects.toThrow('External url is injected');
    });
  });

  describe('api error에 맞는 Exception을 던져야 한다.', () => {
    beforeEach(() => {
      jest.clearAllMocks();

      (mockAxios as unknown as jest.Mock).mockRejectedValue(new Error('error'));
    });

    it('reject된 에러를 그대로 던져져야 한다.', async () => {
      const throwErrorApiResponse = () => api<typeof mockResponse>(mockAxiosRequestConfig('/test/test', 'test'));

      await expect(throwErrorApiResponse).rejects.toThrow('error');
    });
  });
});
