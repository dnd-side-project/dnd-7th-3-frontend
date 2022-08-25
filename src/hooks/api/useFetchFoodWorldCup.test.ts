import { renderHook } from '@testing-library/react-hooks';

import { fetchFoodWorldCup } from '@/api/worldCup';
import FIXTURE_FOOD_WORLD_CUP_ITEM from '@/fixtures/foodWorldCupItem';
import wrapper from '@/test/ReactQueryWrapper';

import useFetchFoodWorldCup from './useFetchFoodWorldCup';

jest.mock('@/api/worldCup');

describe('useFetchFoodWorldCup', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (fetchFoodWorldCup as jest.Mock).mockResolvedValue([FIXTURE_FOOD_WORLD_CUP_ITEM]);
  });

  const requestForm = {
    food: ['한식'],
    latitude: 37.5429123,
    longitude: 127.0672672,
    radius: 1000,
    round: 16,
  };

  const useFetchFoodWorldCupHook = () => renderHook(
    () => useFetchFoodWorldCup(requestForm, true),
    { wrapper },
  );

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
