import { fireEvent, render, screen } from '@testing-library/react';

import lightTheme from '@/styles/theme';
import MockTheme from '@/test/MockTheme';

import RoundItem from './RoundItem';

describe('RoundItem', () => {
  const handleSelected = jest.fn();
  const roundName = '16강';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderRoundItem = () => render((
    <MockTheme>
      <RoundItem
        name={roundName}
        isSelected={given.isSelected}
        onSelected={handleSelected}
      />
    </MockTheme>
  ));

  context('isSelected가 true인 경우', () => {
    given('isSelected', () => true);

    it(`border 색상이 "${lightTheme.main400}"이어야만 하며, text 색상은 "${lightTheme.main400}"이어야만 한다`, () => {
      renderRoundItem();

      expect(screen.getByText(roundName)).toHaveStyle({
        border: `1.5px solid ${lightTheme.main400}`,
        color: lightTheme.main400,
      });
    });
  });

  context('isSelected가 false인 경우', () => {
    given('isSelected', () => false);

    it(`background-color 색상이 "${lightTheme.gray900}"이어야만 한다`, () => {
      renderRoundItem();

      expect(screen.getByText(roundName)).toHaveStyle({
        'background-color': lightTheme.gray900,
      });
    });
  });

  describe('아이템을 클릭한다', () => {
    it('클릭 이벤트가 호출되어야만 한다', () => {
      renderRoundItem();

      fireEvent.click(screen.getByText(roundName));

      expect(handleSelected).toBeCalledWith(roundName);
    });
  });
});
