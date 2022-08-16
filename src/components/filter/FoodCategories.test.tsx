import { fireEvent, render, screen } from '@testing-library/react';

import lightTheme from '@/styles/theme';
import MockTheme from '@/test/MockTheme';

import FoodCategories from './FoodCategories';

describe('FoodCategories', () => {
  const foodEmoji = '🍲';

  const renderFoodCategories = () => render((
    <MockTheme>
      <FoodCategories />
    </MockTheme>
  ));

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
