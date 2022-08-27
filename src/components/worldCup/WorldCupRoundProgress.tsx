import React from 'react';

import styled from '@emotion/styled';

import RoundProgressItem from './RoundProgressItem';

interface Props {
  currentRound: number;
}

function WorldCupRoundProgress({ currentRound }: Props) {
  const isPastRound = (round: number) => round >= currentRound;

  return (
    <RoundProgressWrapper>
      <RoundProgressItem
        roundLabel="16강"
        isPastRound={isPastRound(16)}
        isFirstRound
      />
      <RoundProgressItem
        roundLabel="8강"
        isPastRound={isPastRound(8)}
      />
      <RoundProgressItem
        roundLabel="4강"
        isPastRound={isPastRound(4)}
      />
      <RoundProgressItem
        roundLabel="FINAL"
        isPastRound={isPastRound(2)}
      />
    </RoundProgressWrapper>
  );
}

export default WorldCupRoundProgress;

const RoundProgressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 0px;
  left: 0px;
  width: 100%;
`;
