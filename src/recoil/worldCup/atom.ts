/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';

import { FoodWorldCupDocument } from '@/models/worldCup';

export const worldCupState = atom<FoodWorldCupDocument[]>({
  key: 'worldCupState',
});
