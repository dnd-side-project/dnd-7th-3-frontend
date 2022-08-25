/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';

export type FoodWorldCupForm = {
  food: string[];
  latitude: number;
  longitude: number;
  radius: number;
  round: number | null;
}

export const foodWorldCupFormState = atom<FoodWorldCupForm>({
  key: 'foodWorldCupFormState',
  default: {
    food: [],
    latitude: 0,
    longitude: 0,
    radius: 300,
    round: null,
  },
});
