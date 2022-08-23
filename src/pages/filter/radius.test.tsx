import { render } from '@testing-library/react';

import FilterRadiusPage from './radius.page';

jest.mock('@/components/filter/LocationInformation', () => ({
  __esModule: true,
  default: () => <div />,
}));

describe('FilterRadiusPage', () => {
  const renderFilterRadiusPage = () => render((
    <FilterRadiusPage />
  ));

  it('"거리를 설정해주세요" 문구가 나타나야만 한다', () => {
    const { container } = renderFilterRadiusPage();

    expect(container).toHaveTextContent('거리를 설정해주세요');
  });
});
