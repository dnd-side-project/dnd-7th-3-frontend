import { render } from '@testing-library/react';

import FoodCategoryItem from './FoodCategoryItem';

describe('FoodCategoryItem', () => {
  const foodName = '한식';

  const renderFoodCategoryItem = () => render((
    <FoodCategoryItem
      emoji="🍚"
      name={foodName}
    />
  ));

  it('아이템에 대한 정보가 나타나야만 한다', () => {
    const { container } = renderFoodCategoryItem();

    expect(container).toHaveTextContent(foodName);
  });
});
