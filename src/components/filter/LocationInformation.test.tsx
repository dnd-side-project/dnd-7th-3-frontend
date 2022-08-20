import { render } from '@testing-library/react';

import LocationInformation from './LocationInformation';

describe('LocationInformation', () => {
  const renderLocationInformation = () => render((
    <LocationInformation />
  ));

  it('"위치정보없음" 문구가 나타나야만 한다', () => {
    const { container } = renderLocationInformation();

    expect(container).toHaveTextContent('위치정보없음');
  });
});
