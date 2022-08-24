import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import FilterMenuPage from './menu.page';

jest.mock('@/components/filter/LocationInformation', () => ({
  __esModule: true,
  default: () => <div />,
}));

describe('FilterMenuPage', () => {
  const renderFilterMenuPage = () => render((
    <RecoilRoot>
      <FilterMenuPage />
    </RecoilRoot>
  ));

  it('"메뉴를 선택해주세요"문구가 나타나야만 한다', () => {
    const { container } = renderFilterMenuPage();

    expect(container).toHaveTextContent('메뉴를 선택해주세요');
  });
});
