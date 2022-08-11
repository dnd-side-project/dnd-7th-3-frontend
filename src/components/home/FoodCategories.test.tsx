import { fireEvent, render, screen } from '@testing-library/react';

import FoodCategories from './FoodCategories';

describe('FoodCategories', () => {
  const foodEmoji = '🍚';

  const renderFoodCategories = () => render((
    <FoodCategories />
  ));

  it('"생각해둔 메뉴가 없다면 카테고리로 선택!" 문구가 나타나야만 한다', () => {
    const { container } = renderFoodCategories();

    expect(container).toHaveTextContent('생각해둔 메뉴가 없다면 카테고리로 선택!');
  });

  describe('음식 카테고리를 클릭한다', () => {
    it('선택된 border 색상이 변경되어야만 한다', () => {
      renderFoodCategories();

      const foodCategoryItemElement = screen.getByText(foodEmoji);

      fireEvent.click(foodCategoryItemElement);

      expect(foodCategoryItemElement).toHaveStyle({
        border: '1.5px solid #EB4F27',
      });
    });
  });
});
