import React, { memo } from 'react';

import styled from '@emotion/styled';

interface FoodCategoryItemProps {
  name: string;
  emoji: string;
}

function FoodCategoryItem({ name, emoji }: FoodCategoryItemProps) {
  return (
    <FoodCategoryItemWrapper>
      <FoodCategoryEmoji>
        {emoji}
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

const FoodCategoryEmoji = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  background: #202020;
  border-radius: 50%;
  margin-bottom: 8px;

  font-weight: 400;
  font-size: 36px;
  line-height: 43px;
  letter-spacing: -0.333333px;
`;

const FoodCategoryName = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.05em;
  color: #D9D9D9;
`;
