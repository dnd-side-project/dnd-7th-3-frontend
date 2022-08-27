import { render } from '@testing-library/react';

import WorldCupRoundProgress from './WorldCupRoundProgress';

describe('WorldCupRoundProgress', () => {
  const renderWorldCupRoundProgress = () => render((
    <WorldCupRoundProgress currentRound={16} />
  ));

  it('월드컵 진행 해더가 나타나야만 한다', () => {
    const { container } = renderWorldCupRoundProgress();

    expect(container).toHaveTextContent('16강');
  });
});
