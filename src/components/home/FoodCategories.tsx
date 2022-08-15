import React, { useCallback, useState } from 'react';

import styled from '@emotion/styled';

import { body1Font } from '@/styles/fontStyles';

import FoodCategoryItem from './FoodCategoryItem';

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

function FoodCategories() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const onSelectedCategory = useCallback((name: string) => setSelectedCategory(name), []);

  return (
    <>
      <CategoryDescription>
        여러 메뉴가 먹고싶다면 중복선택도 가능!
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
  ${body1Font};
  color: ${({ theme }) => theme.gray500};
  margin-top: 50px;
  margin-bottom: 25px;
`;

const FoodCategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 15px;
  grid-auto-columns: auto;
`;
