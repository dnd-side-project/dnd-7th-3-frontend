import { PropsWithChildren, ReactElement } from 'react';

import { MutableSnapshot, RecoilRoot } from 'recoil';

import { currentAddressState } from '@/recoil/currentLocation/atom';
import { FoodWorldCupForm, foodWorldCupFormState } from '@/recoil/foodFilter/atom';

interface Props {
  foodWorldCupForm?: FoodWorldCupForm;
  currentAddress?: string;
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
  children,
}: PropsWithChildren<Props>): ReactElement {
  return (
    <RecoilRoot
      initializeState={({ set }: MutableSnapshot): void => {
        set(foodWorldCupFormState, foodWorldCupForm);
        set(currentAddressState, currentAddress);
      }}
    >
      {children}
    </RecoilRoot>
  );
}

export default InjectTestingRecoil;
