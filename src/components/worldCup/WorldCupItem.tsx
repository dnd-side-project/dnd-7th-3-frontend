import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { FoodWorldCupItem } from '@/models/worldCup';

import LocationDotIcon from '../../assets/icons/location.svg';
import AnimatedCheckboxIcon from '../common/AnimatedCheckboxIcon';
import ExternalLink from '../common/ExternalLink';

interface Props {
  worldCupItem: FoodWorldCupItem;
  onClick?: (selectedId: string) => void;
  selectedItemId?: string;
}

function WorldCupItem({ worldCupItem, onClick, selectedItemId }: Props) {
  const handleClick = () => onClick?.(worldCupItem.id);

  const isSelected = selectedItemId === worldCupItem.id;

  return (
    <WorldCupItemWrapper
      isSelected={isSelected}
      onClick={handleClick}
      tabIndex={0}
      data-testid="world-cup-item-wrapper"
    >
      <WorldCupItemTitle>
        <div className="title">{worldCupItem.place_name}</div>
        <MenuLink href={worldCupItem.place_url}>
          MENU
        </MenuLink>
      </WorldCupItemTitle>
      <Distance>
        <LocationDotIcon />
        <div>
          지금 위치에서&nbsp;
          <strong>{`${Math.round(Number(worldCupItem.distance))}m`}</strong>
        </div>
      </Distance>
      <Review>
        한줄 리뷰 :&nbsp;
        <span>{worldCupItem.review}</span>
      </Review>
      <WorldCupItemImageWrapper>
        <img
          src={worldCupItem.img_url?.[0]}
          alt={worldCupItem.place_name}
        />
      </WorldCupItemImageWrapper>
      <AnimatedCheckboxIcon isChecked={isSelected} />
    </WorldCupItemWrapper>
  );
}

export default WorldCupItem;

const WorldCupItemImageWrapper = styled.div`
  position: relative;
  width: 275px;
  height: 162px;
  border-radius: 14px;
  overflow: hidden;
`;

const WorldCupItemWrapper = styled.div<{ isSelected: boolean; }>`
  ${({ theme, isSelected }) => (isSelected ? css`
    border: 1px solid ${theme.main400};
  ` : css`
    border: 1px solid transparent;
  `)}

  cursor: pointer;
  position: relative;
  transition: border-color .2s ease-in-out;
  background: ${({ theme }) => theme.gray900};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 325px;
  height: 292px;
  border-radius: 25px;
  padding: 10px 24px 15px 24px;
`;

const WorldCupItemTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > div.title {
    color: ${({ theme }) => theme.white};
  }
`;

const MenuLink = styled(ExternalLink)`
  background: ${({ theme }) => theme.gray800};
  color: ${({ theme }) => theme.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 8px 10px;
`;

const Distance = styled.div`
  color: ${({ theme }) => theme.gray000};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  & > div > strong {
    color: ${({ theme }) => theme.main400};
  }
`;

const Review = styled.div`
  background: ${({ theme }) => theme.gray800};
  color: ${({ theme }) => theme.gray100};
  width: 100%;
  border-radius: 8px;
  padding: 6px 13px;
  margin-bottom: 12px;

  & > span {
    color: ${({ theme }) => theme.gray400};
  }
`;
