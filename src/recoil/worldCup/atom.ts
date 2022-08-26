/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';

import { FoodWorldCupItem } from '@/models/worldCup';

export const worldCupState = atom<FoodWorldCupItem[]>({
  key: 'worldCupState',
  default: [],
});
