import { FoodWorldCup } from '@/models/worldCup';

import { api } from '..';

import { FoodWorldCupRequest } from './model';

// eslint-disable-next-line import/prefer-default-export
export const fetchFoodWorldCup = async (params: FoodWorldCupRequest) => {
  const response = await api<FoodWorldCup>({
    method: 'GET',
    url: '/worldCup',
    params,
  });

  return response.documents;
};
