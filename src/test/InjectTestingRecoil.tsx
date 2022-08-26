import { PropsWithChildren, ReactElement } from 'react';

import { MutableSnapshot, RecoilRoot } from 'recoil';

import { FoodWorldCupItem } from '@/models/worldCup';
import { currentAddressState } from '@/recoil/currentLocation/atom';
import { FoodWorldCupForm, foodWorldCupFormState } from '@/recoil/foodFilter/atom';
import { worldCupState } from '@/recoil/worldCup/atom';

interface Props {
  foodWorldCupForm?: FoodWorldCupForm;
  currentAddress?: string;
  worldCupItems?: FoodWorldCupItem[];
}

const initialFoodWorldCupForm = {
  food: [],
  latitude: 0,
  longitude: 0,
  radius: 300,
  round: null,
};

function InjectTestingRecoil({
  foodWorldCupForm = initialFoodWorldCupForm,
  currentAddress = '',
  worldCupItems = [],
  children,
}: PropsWithChildren<Props>): ReactElement {
  return (
    <RecoilRoot
      initializeState={({ set }: MutableSnapshot): void => {
        set(foodWorldCupFormState, foodWorldCupForm);
        set(currentAddressState, currentAddress);
        set(worldCupState, worldCupItems);
      }}
    >
      {children}
    </RecoilRoot>
  );
}

export default InjectTestingRecoil;
