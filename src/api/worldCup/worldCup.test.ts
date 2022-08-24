import { fetchFoodWorldCup } from '@/api/worldCup';

import { api } from '..';

jest.mock('..');

describe('worldCup API', () => {
  beforeEach(() => {
    (api as jest.Mock).mockClear();
  });

  describe('fetchFoodWorldCup', () => {
    beforeEach(() => {
      (api as jest.Mock).mockReturnValueOnce('mock');
    });

    const params = {
      food: '한식',
      latitude: 37.124,
      longitude: 127.222,
      radius: 1000,
      round: 16,
    };

    it('GET /worldCup', async () => {
      const response = await fetchFoodWorldCup(params);

      expect(api).toBeCalledWith({
        method: 'GET',
        url: '/worldCup',
        params,
      });
      expect(response).toBe('mock');
    });
  });
});
