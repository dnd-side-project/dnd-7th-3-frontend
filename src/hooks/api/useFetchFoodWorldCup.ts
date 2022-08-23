import { useQuery } from '@tanstack/react-query';

import { fetchFoodWorldCup } from '@/api/worldCup';

function useFetchFoodWorldCup() {
  const query = useQuery(['test'], fetchFoodWorldCup);

  return query;
}

export default useFetchFoodWorldCup;
