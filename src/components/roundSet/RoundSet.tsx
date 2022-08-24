import React, { useCallback } from 'react';

import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import Button from '@/components/common/Button';
import { foodWorldCupFormState } from '@/recoil/foodFilter/atom';
import { body1Font, heading2Font } from '@/styles/fontStyles';

import RoundItem from './RoundItem';

const rounds = [
  { key: 4, name: '4강' },
  { key: 8, name: '8강' },
  { key: 16, name: '16강' },
];

function RoundSet() {
  const [{ round }, setFoodWorldCupForm] = useRecoilState(foodWorldCupFormState);

  const onSelectedRound = useCallback((selectedRound: number) => setFoodWorldCupForm((prev) => ({
    ...prev,
    round: selectedRound,
  })), []);

  return (
    <>
      <RoundSetWrapper>
        <RoundSetTitle>라운드를 설정해주세요</RoundSetTitle>
        <RoundSetDescription>진행하고싶은 월드컵 라운드를 선택해주세요</RoundSetDescription>
        <RoundItemsWrapper>
          {rounds.map(({ key, name }) => (
            <RoundItem
              key={key}
              name={name}
              value={key}
              selectedRound={round}
              onSelected={onSelectedRound}
            />
          ))}
        </RoundItemsWrapper>
      </RoundSetWrapper>
      {round && (
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
  margin-top: 104px;
`;
