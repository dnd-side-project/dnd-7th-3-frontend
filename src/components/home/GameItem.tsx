import React from 'react';

import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

import { body1Font, heading1Font } from '@/styles/fontStyles';

interface GameItemProps {
  url: string;
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
}

function GameItem({
  url, imageUrl, alt, title, description,
}: GameItemProps) {
  return (
    <Link href={url} passHref>
      <GameItemLink>
        <GameItemImageWrapper>
          <Image src={imageUrl} alt={alt} layout="fill" objectFit="cover" />
        </GameItemImageWrapper>
        <div className="game-title">{title}</div>
        <div className="game-description">{description}</div>
      </GameItemLink>
    </Link>
  );
}

export default GameItem;

const GameItemLink = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vw;
  max-height: 300px;
  min-height: 217px;
  width: 100%;
  min-width: 300px;
  background-color: ${({ theme }) => theme.gray900};
  border-radius: 25px;

  & > div.game-title {
    ${heading1Font};
    color: ${({ theme }) => theme.white};
    margin: 27px 0 6px 0;
  }

  & > div.game-description {
    ${body1Font};
    color: ${({ theme }) => theme.gray500};
  }
`;

const GameItemImageWrapper = styled.div`
  position: relative;
  width: 116px;
  height: 77px;
`;
