import { render } from '@testing-library/react';

import GameItem from './GameItem';

describe('GameItem', () => {
  const title = 'title';

  const renderGameItem = () => render((
    <GameItem
      url="/test"
      imageUrl="/image-url"
      alt="이미지"
      title={title}
      description="description"
    />
  ));

  it('game 항목에 대한 정보가 나타나야만 한다', () => {
    const { container } = renderGameItem();

    expect(container).toHaveTextContent(title);
  });
});
