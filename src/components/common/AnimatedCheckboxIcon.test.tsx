import { render, screen } from '@testing-library/react';

import MockTheme from '@/test/MockTheme';

import AnimatedCheckboxIcon from './AnimatedCheckboxIcon';

describe('AnimatedCheckboxIcon', () => {
  const renderAnimatedCheckboxIcon = () => render((
    <MockTheme>
      <AnimatedCheckboxIcon isChecked={given.isChecked} />
    </MockTheme>
  ));

  context('isChecked가 true인 경우', () => {
    given('isChecked', () => true);

    it('checkbox의 opacity 속성은 1이어야만 한다', () => {
      renderAnimatedCheckboxIcon();

      expect(screen.getByTestId('checkbox-circle')).toHaveStyle({
        opacity: 1,
      });
    });
  });

  context('isChecked가 false인 경우', () => {
    given('isChecked', () => false);

    it('checkbox의 opacity 속성은 0이어야만 한다', () => {
      renderAnimatedCheckboxIcon();

      expect(screen.getByTestId('checkbox-circle')).toHaveStyle({
        opacity: 0,
      });
    });
  });
});
