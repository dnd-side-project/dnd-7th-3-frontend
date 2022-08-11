import React, { useCallback, useState } from 'react';

import styled from '@emotion/styled';

import FoodCategoryItem from './FoodCategoryItem';

function FoodCategories() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const foodCategory: { emoji: string; name: string }[] = [
    { emoji: '🍚', name: '한식' },
    { emoji: '🍝', name: '양식' },
    { emoji: '🍣', name: '일식' },
    { emoji: '🍜', name: '중식' },
    { emoji: '🍲', name: '찜 / 탕' },
    { emoji: '🥜', name: '마른안주' },
    { emoji: '🍖', name: '고기' },
    { emoji: '🍟', name: '튀김' },
    { emoji: '🍧', name: '디저트' },
  ];

  const onSelectedCategory = useCallback((name: string) => setSelectedCategory(name), []);

  return (
    <>
      <CategoryDescription>
        생각해둔 메뉴가 없다면 카테고리로 선택!
      </CategoryDescription>
      <FoodCategoryWrapper>
        {foodCategory.map(({ emoji, name }) => (
          <FoodCategoryItem
            key={name}
            isSelected={selectedCategory === name}
            onSelected={onSelectedCategory}
            emoji={emoji}
            name={name}
          />
        ))}
      </FoodCategoryWrapper>
    </>
  );
}

export default FoodCategories;

const CategoryDescription = styled.div`
  margin-top: 50px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.05em;
  color: #9A9A9A;
  margin-bottom: 25px;
`;

const FoodCategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 15px;
  grid-auto-columns: auto;
`;
