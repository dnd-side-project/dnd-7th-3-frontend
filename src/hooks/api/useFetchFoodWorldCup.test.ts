import { renderHook } from '@testing-library/react-hooks';

import { fetchFoodWorldCup } from '@/api/worldCup';
import wrapper from '@/test/ReactQueryWrapper';

import useFetchFoodWorldCup from './useFetchFoodWorldCup';

jest.mock('@/api/worldCup');

describe('useFetchFoodWorldCup', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (fetchFoodWorldCup as jest.Mock).mockResolvedValue('test');
  });

  const requestForm = {
    food: '한식',
    latitude: 37.124,
    longitude: 127.222,
    radius: 1000,
    round: 16,
  };

  const useFetchFoodWorldCupHook = () => renderHook(
    () => useFetchFoodWorldCup(requestForm),
    { wrapper },
  );

  it('fetchFoodWorldCup api를 호출해야만 한다.', async () => {
    const { result, waitFor } = useFetchFoodWorldCupHook();

    await waitFor(() => result.current.isSuccess);

    expect(fetchFoodWorldCup).toBeCalledWith(requestForm);
    expect(result.current.data).toEqual('test');
  });
});
