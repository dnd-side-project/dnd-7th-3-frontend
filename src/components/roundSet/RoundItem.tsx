import React, { memo } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { subHead2Font } from '@/styles/fontStyles';

import AnimatedCheckboxIcon from '../common/AnimatedCheckboxIcon';

interface RoundItemProps{
  name: string;
  isSelected: boolean;
  onSelected: (name: string)=>void;
}

function RoundItem({ name, isSelected, onSelected }:RoundItemProps) {
  const handleSelect = () => onSelected(name);

  return (
    <RoundItemWrapper
      role="button"
      tabIndex={0}
      onClick={handleSelect}
      isSelected={isSelected}
    >
      {name}
      <AnimatedCheckboxIcon isChecked={isSelected} />
    </RoundItemWrapper>
  );
}

export default memo(RoundItem);

const RoundItemWrapper = styled.div<{isSelected: boolean;}>`
  ${subHead2Font};
  cursor: pointer;
  user-select: none;
  color: ${({ theme }) => theme.gray100};
  background-color: ${({ theme }) => theme.gray900};
  text-align: center;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 62px;
  border-radius: 25px;
  transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;
  border: 1.5px solid transparent;  
  margin-bottom: 30px;

  ${({ isSelected, theme }) => (isSelected ? css`
    color: ${theme.main400};
    border: 1.5px solid ${theme.main400};
  ` : css`
    opacity: 0.6;
    background-color: ${theme.gray900};
  `)};
`;
