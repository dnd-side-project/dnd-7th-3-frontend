import { render } from '@testing-library/react';

import MobileWebLayout from './MobileWebLayout';

describe('MobileWebLayout', () => {
  function MockComponent() {
    return <>mockChild</>;
  }

  const renderMobileWebLayout = () => render((
    <MobileWebLayout>
      <MockComponent />
    </MobileWebLayout>
  ));

  it('자식 컴포넌트가 나타나야만 한다', () => {
    const { container } = renderMobileWebLayout();

    expect(container).toHaveTextContent('mockChild');
  });
});
