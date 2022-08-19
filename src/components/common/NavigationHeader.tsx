import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';

import { subHead1Font } from '@/styles/fontStyles';

export type ActiveDot = 'menu' | 'radius' | 'roundSet';

interface NavigationHeaderProps {
  goBackHref: string;
  nextHref?: string;
  activeDot: ActiveDot;
}

function NavigationHeader({
  goBackHref, nextHref, activeDot,
}: NavigationHeaderProps) {
  return (
    <NavigationHeaderWrapper>
      <Link href={goBackHref} passHref>
        <HeaderLink className="back">
          뒤로
        </HeaderLink>
      </Link>
      <DotGroup>
        <Dot isViewed={activeDot === 'menu'} />
        <Dot isViewed={activeDot === 'radius'} />
        <Dot isViewed={activeDot === 'roundSet'} />
      </DotGroup>
      {nextHref && (
        <Link href={nextHref} passHref>
          <HeaderLink className="skip">
            건너뛰기
          </HeaderLink>
        </Link>
      )}
    </NavigationHeaderWrapper>
  );
}

export default NavigationHeader;

const NavigationHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 24px;
  right: 0px;
  left: 0px;
  width: 100%;
`;

const HeaderLink = styled.a`
  ${subHead1Font};
  color: ${({ theme }) => theme.main400};
  position: absolute;
  top: -9px;

  &.back {
    left: 24px;
  }

  &.skip {
    right: 24px;
  }
`;

const Dot = styled.div<{ isViewed: boolean; }>`
  transition: background-color 0.2s ease-in-out;
  width: 5px;
  height: 5px;
  border-radius: 50%;

  ${({ isViewed, theme }) => (isViewed ? css`
    background-color: ${theme.white};
  ` : css`
    background-color: ${theme.gray700};
  `)}
`;

const DotGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  & > div:not(div:last-of-type) {
    margin-right: 9px;
  }
`;
