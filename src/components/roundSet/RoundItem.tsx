import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import AnimatedCheckboxIcon from '../common/AnimatedCheckboxIcon';

interface RoundItemProps{
  name: string;
  isSelected: boolean;
  onSelected: (name: string)=>void;
}

function RoundItem({ name, isSelected, onSelected }:RoundItemProps) {
  const handleSelect = () => onSelected(name);

  return (
    <RoundItemWrapper onClick={handleSelect} isSelected={isSelected}>
      {name}
      <AnimatedCheckboxIcon isChecked={isSelected} />
    </RoundItemWrapper>
  );
}

export default RoundItem;

const RoundItemWrapper = styled.div<{isSelected: boolean;}>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 62px;
  border-radius: 31px;
  transition: border-color 0.2s ease-in-out;
  border: 1.5px solid #464646;  
  margin-bottom: 30px;

  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.05em;
  color: #808080;

  ${({ isSelected }) => isSelected && css`
    border: 1.5px solid #EB4F27;
    font-weight: 700;
    color: #FFFFFF;
  `};
`;
