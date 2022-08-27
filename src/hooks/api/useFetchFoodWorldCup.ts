import { useQuery } from '@tanstack/react-query';

import { fetchFoodWorldCup } from '@/api/worldCup';
import { FoodWorldCupForm } from '@/recoil/foodFilter/atom';
import { checkEmpty, checkNumNull, isProd } from '@/utils/utils';

function useFetchFoodWorldCup(form: FoodWorldCupForm, enabled: boolean) {
  const requestForm = {
    ...form,
    latitude: isProd(process.env.NODE_ENV) ? form.latitude : 37.5429123,
    longitude: isProd(process.env.NODE_ENV) ? form.longitude : 127.0672672,
    food: form.food.join('|'),
    round: checkNumNull(form.round),
  };

  const query = useQuery(['foodWorldCup', requestForm], () => fetchFoodWorldCup(requestForm), {
    staleTime: Infinity,
    cacheTime: Infinity,
    enabled,
  });

  return {
    ...query,
    data: checkEmpty(query.data),
  };
}

export default useFetchFoodWorldCup;
