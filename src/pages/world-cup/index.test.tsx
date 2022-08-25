import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import WorldCupPage from './index.page';

describe('WorldCupPage', () => {
  const renderWorldCupPage = () => render((
    <RecoilRoot>
      <WorldCupPage />
    </RecoilRoot>
  ));

  it('월드컵에 대한 내용이 나타나야만 한다', () => {
    const { container } = renderWorldCupPage();

    expect(container).toHaveTextContent('16강');
  });
});
