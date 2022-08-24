import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import FilterRadiusPage from './radius.page';

jest.mock('@/components/filter/LocationInformation', () => ({
  __esModule: true,
  default: () => <div />,
}));

describe('FilterRadiusPage', () => {
  const renderFilterRadiusPage = () => render((
    <RecoilRoot>
      <FilterRadiusPage />
    </RecoilRoot>
  ));

  it('"거리를 설정해주세요" 문구가 나타나야만 한다', () => {
    const { container } = renderFilterRadiusPage();

    expect(container).toHaveTextContent('거리를 설정해주세요');
  });
});
