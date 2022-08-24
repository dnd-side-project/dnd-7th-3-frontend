import React, { useCallback } from 'react';

import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import { foodWorldCupFormState } from '@/recoil/foodFilter/atom';

import FoodCategoryItem from './FoodCategoryItem';

const foodCategory: { emoji: string; name: string; value: string; }[] = [
  { emoji: '🍲', name: '국밥 / 감자탕', value: '국밥,감자탕' },
  { emoji: '🍖', name: '육류 / 고기', value: '육류,고기' },
  { emoji: '🍤', name: '해물 / 생선', value: '해물,생선' },
  { emoji: '🥘', name: '찌개 / 전골', value: '찌개,전골' },
  { emoji: '🍡', name: '양꼬치', value: '양꼬치' },
  { emoji: '🍗', name: '치킨', value: '치킨' },
  { emoji: '🍺', name: '호프 / 요리주점', value: '호프,요리주점' },
  { emoji: '🥂', name: '바', value: '바' },
  { emoji: '🍽', name: '기타', value: '기타' },
];

function FoodCategories() {
  const [{ food }, setFoodWorldCupForm] = useRecoilState(foodWorldCupFormState);

  const onSelectedCategory = useCallback((selectedCategory: string) => {
    if (food.includes(selectedCategory)) {
      setFoodWorldCupForm((prev) => ({
        ...prev,
        food: prev.food.filter((category) => category !== selectedCategory),
      }));
      return;
    }

    setFoodWorldCupForm((prev) => ({
      ...prev,
      food: [...prev.food, selectedCategory],
    }));
  }, [food]);

  return (
    <FoodCategoryWrapper>
      {foodCategory.map(({ emoji, name, value }) => (
        <FoodCategoryItem
          key={value}
          isSelected={food.includes(value)}
          onSelected={onSelectedCategory}
          emoji={emoji}
          value={value}
          name={name}
        />
      ))}
    </FoodCategoryWrapper>
  );
}

export default FoodCategories;

const FoodCategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 15px;
  grid-auto-columns: auto;
`;
