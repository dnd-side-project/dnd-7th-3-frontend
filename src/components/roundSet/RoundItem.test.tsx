import { fireEvent, render, screen } from '@testing-library/react';

import RoundItem from './RoundItem';

describe('RoundItem', () => {
  const handleSelected = jest.fn();
  const roundName = '16강';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderRoundItem = () => render((
    <RoundItem name={roundName} isSelected={given.isSelected} onSelected={handleSelected} />
  ));

  context('isSelected가 true인 경우', () => {
    given('isSelected', () => true);

    it('border 색상이 "#EB4F27"이어야만 하며, text 색상은 "#FFFFFF"이어야만 한다', () => {
      renderRoundItem();

      expect(screen.getByText(roundName)).toHaveStyle({
        border: '1.5px solid #EB4F27',
        color: '#FFFFFF',
      });
    });
  });

  context('isSelected가 false인 경우', () => {
    given('isSelected', () => false);

    it('border 색상이 "#464646"이어야만 하며, text 색상은 "#808080"이어야만 한다', () => {
      renderRoundItem();

      expect(screen.getByText(roundName)).toHaveStyle({
        border: '1.5px solid #464646',
        color: '#808080',
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
