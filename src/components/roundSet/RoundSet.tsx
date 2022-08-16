import React, { useCallback, useState } from 'react';

import styled from '@emotion/styled';

import Button from '@/components/common/Button';
import { body1Font, heading2Font } from '@/styles/fontStyles';

import RoundItem from './RoundItem';

function RoundSet() {
  const [selectedRound, setSelectedRound] = useState<string>();

  const rounds: string[] = ['4강', '8강', '16강', '32강'];

  const onSelectedRound = useCallback((name: string) => setSelectedRound(name), []);

  return (
    <>
      <RoundSetWrapper>
        <RoundSetTitle>라운드를 설정해주세요</RoundSetTitle>
        <RoundSetDescription>진행하고싶은 월드컵 라운드를 선택해주세요</RoundSetDescription>
        <RoundItemsWrapper>
          {rounds.map((round) => (
            <RoundItem
              key={round}
              name={round}
              selectedRound={selectedRound}
              onSelected={onSelectedRound}
            />
          ))}
        </RoundItemsWrapper>
      </RoundSetWrapper>
      {selectedRound && (
        <Button type="button">게임 시작</Button>
      )}
    </>
  );
}

export default RoundSet;

const RoundSetTitle = styled.div`
  ${heading2Font};
  color: ${({ theme }) => theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 12px;
`;

const RoundSetDescription = styled.div`
  ${body1Font};
  color: ${({ theme }) => theme.gray500};
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
`;

const RoundItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 101px;
`;

const RoundSetWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
