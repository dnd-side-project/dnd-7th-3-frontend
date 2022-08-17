import { render } from '@testing-library/react';

import FilterMenuPage from './menu.page';

describe('FilterMenuPage', () => {
  const renderFilterMenuPage = () => render((
    <FilterMenuPage />
  ));

  it('"메뉴를 선택해주세요"문구가 나타나야만 한다', () => {
    const { container } = renderFilterMenuPage();

    expect(container).toHaveTextContent('메뉴를 선택해주세요');
  });
});
