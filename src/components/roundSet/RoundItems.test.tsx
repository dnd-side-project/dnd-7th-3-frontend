import { fireEvent, render, screen } from '@testing-library/react';

import RoundItems from './RoundItems';

describe('RoundItems', () => {
  const renderRoundItems = () => render((<RoundItems />));

  describe('Round를 선택한다.', () => {
    it('선택된 border 색상과 text 색상이 변경되어야만 한다', () => {
      renderRoundItems();

      const round32Element = screen.getByText('32강');

      fireEvent.click(round32Element);

      expect(round32Element).toHaveStyle({
        border: '1.5px solid #EB4F27',
        color: '#FFFFFF',
      });
    });
  });
});
