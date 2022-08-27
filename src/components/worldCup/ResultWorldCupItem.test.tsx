import { render } from '@testing-library/react';

import FIXTURE_FOOD_WORLD_CUP_ITEM from '@/fixtures/foodWorldCupItem';
import InjectTestingRecoil from '@/test/InjectTestingRecoil';

import ResultWorldCupItem from './ResultWorldCupItem';

describe('ResultWorldCupItem', () => {
  const renderResultWorldCupItem = () => render((
    <InjectTestingRecoil worldCupItems={[{
      ...FIXTURE_FOOD_WORLD_CUP_ITEM,
      round: given.round,
    }]}
    >
      <ResultWorldCupItem />
    </InjectTestingRecoil>
  ));

  context('1등한 음식점이 존재하지 않는 경우', () => {
    given('round', () => 16);

    it('아무것도 나타나지 않아야만 한다', () => {
      const { container } = renderResultWorldCupItem();

      expect(container).toBeEmptyDOMElement();
    });
  });

  context('1등한 음식점이 존재하는 경우', () => {
    given('round', () => 1);

    it('1등한 음식점에 대한 정보가 나타나야만 한다', () => {
      const { container } = renderResultWorldCupItem();

      expect(container).toHaveTextContent(FIXTURE_FOOD_WORLD_CUP_ITEM.place_name);
    });
  });
});
