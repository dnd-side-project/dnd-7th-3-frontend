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
    context('이미 선택한 카테고리인 경우', () => {
      it('border 색상은 없어야만 한다', () => {
        renderFoodCategories();

        const foodCategoryItemElement = screen.getByText(foodEmoji);

        fireEvent.click(foodCategoryItemElement);
        fireEvent.click(foodCategoryItemElement);

        expect(foodCategoryItemElement).toHaveStyle({
          border: '1.5px solid transparent',
        });
      });
    });

    context('선택되지 않은 카테고리인 경우', () => {
      it(`border 색상이 ${lightTheme.main400}이여야만 한다`, () => {
        renderFoodCategories();

        const foodCategoryItemElement = screen.getByText(foodEmoji);

        fireEvent.click(foodCategoryItemElement);

        expect(foodCategoryItemElement).toHaveStyle({
          border: `1.5px solid ${lightTheme.main400}`,
        });
      });
    });
  });
});
