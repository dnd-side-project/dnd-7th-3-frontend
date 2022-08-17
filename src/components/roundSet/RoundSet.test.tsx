import { fireEvent, render, screen } from '@testing-library/react';

import lightTheme from '@/styles/theme';
import MockTheme from '@/test/MockTheme';

import RoundSet from './RoundSet';

describe('RoundSet', () => {
  const renderRoundSet = () => render((
    <MockTheme>
      <RoundSet />
    </MockTheme>
  ));

  describe('Round를 선택한다.', () => {
    it('선택된 border 색상과 text 색상이 변경되어야만 한다', () => {
      renderRoundSet();

      const round32Element = screen.getByText('32강');

      fireEvent.click(round32Element);

      expect(round32Element).toHaveStyle({
        border: `1.5px solid ${lightTheme.main400}`,
        color: `${lightTheme.main400}`,
      });
    });

    it('"게임 시작" 버튼이 나타나야만 한다', () => {
      const { container } = renderRoundSet();

      fireEvent.click(screen.getByText('32강'));

      expect(container).toHaveTextContent('게임 시작');
    });
  });
});
