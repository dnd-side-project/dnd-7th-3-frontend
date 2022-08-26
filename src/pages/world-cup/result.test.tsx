import { render } from '@testing-library/react';

import ResultPage from './result.page';

describe('ResultPage', () => {
  const renderResultPage = () => render((
    <ResultPage />
  ));

  it('"오늘 2차장소는" 문구가 나타나야만 한다', () => {
    const { container } = renderResultPage();

    expect(container).toHaveTextContent('오늘 2차장소는');
  });
});
