import { render, screen } from '@testing-library/react';

import FIXTURE_FOOD_WORLD_CUP_ITEM from '@/fixtures/foodWorldCupItem';
import lightTheme from '@/styles/theme';
import MockTheme from '@/test/MockTheme';

import WorldCupItem from './WorldCupItem';

describe('WorldCupItem', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderWorldCupItem = () => render((
    <MockTheme>
      <WorldCupItem
        worldCupItem={{
          ...FIXTURE_FOOD_WORLD_CUP_ITEM,
          round: 4,
        }}
        onClick={handleClick}
        selectedItemId={given.selectedItemId}
      />
    </MockTheme>
  ));

  context('선택된 item인 경우', () => {
    given('selectedItemId', () => FIXTURE_FOOD_WORLD_CUP_ITEM.id);

    it(`border 색상은 ${lightTheme.main400}`, () => {
      renderWorldCupItem();

      expect(screen.getByTestId('world-cup-item-wrapper')).toHaveStyle({
        border: `1px solid ${lightTheme.main400}`,
      });
    });
  });

  context('선택된 item이 아닌 경우', () => {
    given('selectedItemId', () => 'test');

    it('border 색상은 없어야만 한다', () => {
      renderWorldCupItem();

      expect(screen.getByTestId('world-cup-item-wrapper')).toHaveStyle({
        border: '1px solid transparent',
      });
    });
  });
});
