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
        selectedRound={given.selectedRound}
        onSelected={handleSelected}
      />
    </MockTheme>
  ));

  context('selectedRound가 존재하는 경우', () => {
    context('"name"과 "selectedRound"가 일치하는 경우', () => {
      given('selectedRound', () => roundName);

      it(`border 색상이 "${lightTheme.main400}"이어야만 하며, text 색상은 "${lightTheme.main400}"이어야만 한다`, () => {
        renderRoundItem();

        expect(screen.getByText(roundName)).toHaveStyle({
          border: `1.5px solid ${lightTheme.main400}`,
          color: lightTheme.main400,
        });
      });
    });

    context('"name"과 "selectedRound"가 일치하지 않는 경우', () => {
      given('selectedRound', () => '4강');

      it('opacity 속성이 "0.6"이어야만 한다', () => {
        renderRoundItem();

        expect(screen.getByText(roundName)).toHaveStyle({
          opacity: 0.6,
        });
      });
    });
  });

  context('selectedRound가 존재하지 않는 경우', () => {
    given('selectedRound', () => undefined);

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
