import { render } from '@testing-library/react';

import IndexPage from './index.page';

describe('IndexPage', () => {
  const renderIndexPage = () => render((
    <IndexPage />
  ));

  it('"반가워요!"문구가 나타나야만 한다', () => {
    const { container } = renderIndexPage();

    expect(container).toHaveTextContent('반가워요!');
  });
});
