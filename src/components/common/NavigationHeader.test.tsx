import { render } from '@testing-library/react';

import MockTheme from '@/test/MockTheme';

import NavigationHeader from './NavigationHeader';

describe('NavigationHeader', () => {
  const renderNavigationHeader = () => render((
    <MockTheme>
      <NavigationHeader
        goBackHref="/"
        nextHref={given.nextHref}
        activeDot="menu"
      />
    </MockTheme>
  ));

  context('nextHref가 존재하는 경우', () => {
    given('nextHref', () => '/filter/radius');

    it('건너뛰기 링크가 나타나야만 한다', () => {
      const { container } = renderNavigationHeader();

      expect(container).toHaveTextContent('건너뛰기');
    });
  });

  context('nextHref가 존재하지 않는 경우', () => {
    given('nextHref', () => undefined);

    it('건너뛰기 링크가 안보여야만 한다', () => {
      const { container } = renderNavigationHeader();

      expect(container).not.toHaveTextContent('건너뛰기');
    });
  });
});
