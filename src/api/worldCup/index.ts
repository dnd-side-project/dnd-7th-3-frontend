import { api } from '..';

// eslint-disable-next-line import/prefer-default-export
export const fetchFoodWorldCup = async () => {
  const response = await api({
    method: 'GET',
    url: '/worldCup',
  });

  return response;
};
