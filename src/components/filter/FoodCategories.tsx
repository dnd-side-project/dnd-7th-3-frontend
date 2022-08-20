import React, { useCallback, useState } from 'react';

import styled from '@emotion/styled';

import FoodCategoryItem from './FoodCategoryItem';

const foodCategory: { emoji: string; name: string }[] = [
  { emoji: '🍲', name: '국밥 / 감자탕' },
  { emoji: '🍖', name: '육류 / 고기' },
  { emoji: '🍤', name: '해물 / 생선' },
  { emoji: '🥘', name: '찌개 / 전골' },
  { emoji: '🍡', name: '양꼬치' },
  { emoji: '🍗', name: '치킨' },
  { emoji: '🍺', name: '호프 / 요리주점' },
  { emoji: '🥂', name: '바' },
  { emoji: '🍽', name: '기타' },
];

function FoodCategories() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const onSelectedCategory = useCallback((selectedCategory: string) => {
    if (selectedCategories.includes(selectedCategory)) {
      setSelectedCategories((
        prevSelectedCategories,
      ) => prevSelectedCategories.filter((category) => category !== selectedCategory));
      return;
    }

    setSelectedCategories((prevSelectedCategories) => [
      ...prevSelectedCategories, selectedCategory,
    ]);
  }, [selectedCategories]);

  return (
    <FoodCategoryWrapper>
      {foodCategory.map(({ emoji, name }) => (
        <FoodCategoryItem
          key={name}
          isSelected={selectedCategories.includes(name)}
          onSelected={onSelectedCategory}
          emoji={emoji}
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
