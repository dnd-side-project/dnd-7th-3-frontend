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

    it('GET /worldCup', async () => {
      const response = await fetchFoodWorldCup();

      expect(api).toBeCalledWith({
        method: 'GET',
        url: '/worldCup',
      });
      expect(response).toBe('mock');
    });
  });
});
