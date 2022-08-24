/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';

type FoodWorldCupForm = {
  food: string[];
  latitude: number | null;
  longitude: number | null;
  radius: number;
  round: number | null;
}

export const foodWorldCupFormState = atom<FoodWorldCupForm>({
  key: 'foodWorldCupFormState',
  default: {
    food: [],
    latitude: null,
    longitude: null,
    radius: 300,
    round: null,
  },
});
