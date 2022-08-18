import { render } from '@testing-library/react';

import getNavigationHeaderLayout from './NavigationHeaderGetLayout';

describe('NavigationHeaderGetLayout', () => {
  const GetLayout = getNavigationHeaderLayout({
    activeDot: 'menu',
    goBackHref: '/',
  });

  function MockComponent(): JSX.Element {
    return <>Test</>;
  }

  const renderNavigationHeaderGetLayout = () => render((
    <>
      {GetLayout(<MockComponent />)}
    </>
  ));

  it('header 레이아웃에 대한 내용이 보여야만 한다', () => {
    const { container } = renderNavigationHeaderGetLayout();

    expect(container).toHaveTextContent('뒤로');
  });
});
