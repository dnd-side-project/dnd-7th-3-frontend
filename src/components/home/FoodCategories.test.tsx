import { fireEvent, render, screen } from '@testing-library/react';

import lightTheme from '@/styles/theme';
import MockTheme from '@/test/MockTheme';

import FoodCategories from './FoodCategories';

describe('FoodCategories', () => {
  const foodEmoji = '🍚';

  const renderFoodCategories = () => render((
    <MockTheme>
      <FoodCategories />
    </MockTheme>
  ));

  it('"여러 메뉴가 먹고싶다면 중복선택도 가능!" 문구가 나타나야만 한다', () => {
    const { container } = renderFoodCategories();

    expect(container).toHaveTextContent('여러 메뉴가 먹고싶다면 중복선택도 가능!');
  });

  describe('음식 카테고리를 클릭한다', () => {
    it('선택된 border 색상이 변경되어야만 한다', () => {
      renderFoodCategories();

      const foodCategoryItemElement = screen.getByText(foodEmoji);

      fireEvent.click(foodCategoryItemElement);

      expect(foodCategoryItemElement).toHaveStyle({
        border: `1.5px solid ${lightTheme.main400}`,
      });
    });
  });
});
