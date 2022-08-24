import { useQuery } from '@tanstack/react-query';

import { fetchFoodWorldCup } from '@/api/worldCup';
import { FoodWorldCupRequest } from '@/api/worldCup/model';

function useFetchFoodWorldCup(request: FoodWorldCupRequest) {
  const query = useQuery(['foodWorldCup', request], () => fetchFoodWorldCup(request), {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  return query;
}

export default useFetchFoodWorldCup;
