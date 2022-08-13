import React, { useCallback, useState } from 'react';

import styled from '@emotion/styled';

import Button from '@/components/common/Button';

import RoundItem from './RoundItem';

function RoundItems() {
  const [selectedRound, setSelectedRound] = useState<string>('');

  const rounds:string[] = ['32강', '16강', '8강', '4강'];

  const onSelectedRound = useCallback((name: string) => setSelectedRound(name), []);

  return (
    <>
      <RoundItemsWrapper>
        {rounds.map((round) => (
          <RoundItem
            key={round}
            name={round}
            isSelected={round === selectedRound}
            onSelected={onSelectedRound}
          />
        ))}
      </RoundItemsWrapper>
      <ButtonWrapper>
        <Button disabled={!selectedRound}>월드컵시작</Button>
      </ButtonWrapper>
    </>
  );
}

export default RoundItems;

const RoundItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 101px;
`;

const ButtonWrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
`;
