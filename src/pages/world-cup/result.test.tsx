import { render } from '@testing-library/react';

import InjectTestingRecoil from '@/test/InjectTestingRecoil';

import ResultPage from './result.page';

describe('ResultPage', () => {
  const renderResultPage = () => render((
    <InjectTestingRecoil>
      <ResultPage />
    </InjectTestingRecoil>
  ));

  it('"오늘 2차장소는" 문구가 나타나야만 한다', () => {
    const { container } = renderResultPage();

    expect(container).toHaveTextContent('오늘 2차장소는');
  });
});
