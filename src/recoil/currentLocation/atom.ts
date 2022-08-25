/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';

export const currentAddressState = atom<string>({
  key: 'currentAddressState',
  default: '',
});
