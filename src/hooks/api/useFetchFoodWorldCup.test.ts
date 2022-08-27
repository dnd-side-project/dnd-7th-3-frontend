import { renderHook } from '@testing-library/react-hooks';

import { fetchFoodWorldCup } from '@/api/worldCup';
import FIXTURE_FOOD_WORLD_CUP_ITEM from '@/fixtures/foodWorldCupItem';
import wrapper from '@/test/ReactQueryWrapper';

import useFetchFoodWorldCup from './useFetchFoodWorldCup';

jest.mock('@/api/worldCup');

describe('useFetchFoodWorldCup', () => {
  const { env } = process;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
    process.env = { ...env };

    (fetchFoodWorldCup as jest.Mock).mockResolvedValue([FIXTURE_FOOD_WORLD_CUP_ITEM]);
  });

  afterEach(() => {
    process.env = env;
  });

  const requestForm = {
    food: ['한식'],
    latitude: 1,
    longitude: 1,
    radius: 1000,
    round: 16,
  };

  const useFetchFoodWorldCupHook = () => renderHook(
    () => useFetchFoodWorldCup(requestForm, true),
    { wrapper },
  );

  context('production 환경인 경우', () => {
    beforeEach(() => {
      (process.env.NODE_ENV as unknown as string) = 'production';
    });

    it('fetchFoodWorldCup api를 호출해야만 한다.', async () => {
      const { result, waitFor } = useFetchFoodWorldCupHook();

      await waitFor(() => result.current.isSuccess);

      expect(fetchFoodWorldCup).toBeCalledWith({
        ...requestForm,
        food: requestForm.food.join('|'),
      });
      expect(result.current.data).toEqual([FIXTURE_FOOD_WORLD_CUP_ITEM]);
    });
  });

  context('production 환경이 아닌 경우', () => {
    beforeEach(() => {
      (process.env.NODE_ENV as unknown as string) = 'development';
    });

    it('fetchFoodWorldCup api를 호출해야만 한다.', async () => {
      const { result, waitFor } = useFetchFoodWorldCupHook();

      await waitFor(() => result.current.isSuccess);

      expect(fetchFoodWorldCup).toBeCalledWith({
        ...requestForm,
        latitude: 37.5429123,
        longitude: 127.0672672,
        food: requestForm.food.join('|'),
      });
      expect(result.current.data).toEqual([FIXTURE_FOOD_WORLD_CUP_ITEM]);
    });
  });
});
