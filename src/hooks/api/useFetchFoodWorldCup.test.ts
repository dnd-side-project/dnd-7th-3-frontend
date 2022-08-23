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

  const useFetchFoodWorldCupHook = () => renderHook(
    () => useFetchFoodWorldCup(),
    { wrapper },
  );

  it('fetchFoodWorldCup api를 호출해야만 한다.', async () => {
    const { result, waitFor } = useFetchFoodWorldCupHook();

    await waitFor(() => result.current.isSuccess);

    expect(fetchFoodWorldCup).toBeCalled();
    expect(result.current.data).toEqual('test');
  });
});
