import { fireEvent, render, screen } from '@testing-library/react';

import FoodCategoryItem from './FoodCategoryItem';

describe('FoodCategoryItem', () => {
  const handleSelected = jest.fn();
  const foodName = '한식';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderFoodCategoryItem = () => render((
    <FoodCategoryItem
      emoji="🍚"
      name={foodName}
      isSelected={given.isSelected}
      onSelected={handleSelected}
    />
  ));

  context('isSelected가 true인 경우', () => {
    given('isSelected', () => true);

    it('border 색상이 "#EB4F27"이어야만 한다', () => {
      renderFoodCategoryItem();

      expect(screen.getByTestId('food-category-emoji-button')).toHaveStyle({
        border: '1.5px solid #EB4F27',
      });
    });
  });

  context('isSelected가 false인 경우', () => {
    given('isSelected', () => false);

    it('border 색상이 "transparent"이어야만 한다', () => {
      renderFoodCategoryItem();

      expect(screen.getByTestId('food-category-emoji-button')).toHaveStyle({
        border: '1.5px solid transparent',
      });
    });

    describe('아이템을 클릭한다', () => {
      it('클릭 이벤트가 호출되어야만 한다', () => {
        renderFoodCategoryItem();

        fireEvent.click(screen.getByTestId('food-category-emoji-button'));

        expect(handleSelected).toBeCalledWith(foodName);
      });
    });
  });
});
