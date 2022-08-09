import { render } from '@testing-library/react';

import FoodCategories from './FoodCategories';

describe('FoodCategories', () => {
  const renderFoodCategories = () => render((
    <FoodCategories />
  ));

  it('"생각해둔 메뉴가 없다면 카테고리로 선택!" 문구가 나타나야만 한다', () => {
    const { container } = renderFoodCategories();

    expect(container).toHaveTextContent('생각해둔 메뉴가 없다면 카테고리로 선택!');
  });
});
