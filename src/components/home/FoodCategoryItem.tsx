import React, { memo } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import AnimatedCheckboxIcon from '../common/AnimatedCheckboxIcon';

interface FoodCategoryItemProps {
  name: string;
  emoji: string;
  isSelected: boolean;
  onSelected: (name: string) => void;
}

function FoodCategoryItem({
  name, emoji, isSelected, onSelected,
}: FoodCategoryItemProps) {
  const handleSelect = () => onSelected(name);

  return (
    <FoodCategoryItemWrapper>
      <FoodCategoryEmoji
        role="button"
        tabIndex={0}
        onClick={handleSelect}
        isSelected={isSelected}
        data-testid="food-category-emoji-button"
      >
        {emoji}
        <AnimatedCheckboxIcon isChecked={isSelected} />
      </FoodCategoryEmoji>
      <FoodCategoryName>
        {name}
      </FoodCategoryName>
    </FoodCategoryItemWrapper>
  );
}

export default memo(FoodCategoryItem);

const FoodCategoryItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FoodCategoryEmoji = styled.div<{ isSelected: boolean; }>`
  position: relative;
  user-select: none;
  transition: border-color 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  background: #202020;
  border-radius: 50%;
  box-sizing: border-box;
  border: 1.5px solid transparent;
  margin-bottom: 8px;

  font-weight: 400;
  font-size: 36px;
  line-height: 43px;
  letter-spacing: -0.333333px;

  ${({ isSelected }) => isSelected && css`
    border: 1.5px solid #EB4F27;
  `};
`;

const FoodCategoryName = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.05em;
  color: #D9D9D9;
`;
