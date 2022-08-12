import { render } from '@testing-library/react';

import FilterPage from './filter.page';

describe('FilterPage', () => {
  const renderFilterPage = () => render((
    <FilterPage />
  ));

  it('"라운드 설정" 문구가 나타나야만 한다', () => {
    const { container } = renderFilterPage();

    expect(container).toHaveTextContent('라운드 설정');
  });
});
