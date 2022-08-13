import { render } from '@testing-library/react';

import RoundSetPage from './round-set.page';

describe('RoundSetPage', () => {
  const renderRoundSetPage = () => render((
    <RoundSetPage />
  ));

  it('"라운드 설정" 문구가 나타나야만 한다', () => {
    const { container } = renderRoundSetPage();

    expect(container).toHaveTextContent('라운드 설정');
  });
});
