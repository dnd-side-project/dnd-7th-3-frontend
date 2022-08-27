import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  roundLabel: string;
  isPastRound: boolean;
  isFirstRound?: boolean;
}

function RoundProgressItem({ roundLabel, isPastRound, isFirstRound = false }: Props) {
  return (
    <RoundProgressItemWrapper>
      <div>
        {!isFirstRound && (
          <ProgressLine isPastRound={isPastRound} data-testid="progress-line" />
        )}
        <ProgressDot isPastRound={isPastRound}>
          <Dot />
        </ProgressDot>
      </div>
      <RoundLabel isPastRound={isPastRound} data-testid="round-label">
        {roundLabel}
      </RoundLabel>
    </RoundProgressItemWrapper>
  );
}

export default RoundProgressItem;

const RoundProgressItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 43px;

  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: -0.005em;

  & > div:first-of-type {
    margin-bottom: 7px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const ProgressDot = styled.div<{ isPastRound: boolean; }>`
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  box-sizing: border-box;

  ${({ theme, isPastRound }) => (isPastRound ? css`
    background: rgba(235, 79, 39, 0.3);
  ` : css`
    border: 1px solid ${theme.gray900};
  `)}

  & > div {
    display: ${({ isPastRound }) => (isPastRound ? 'block' : 'none')};
    background-color:${({ theme }) => theme.main400};
  }
`;

const Dot = styled.div`
  border-radius: 50%;
  width: 8px;
  height: 8px;
  position: absolute;
  top: 3px;
  right: 3px;
  z-index: 1;
`;

const ProgressLine = styled.div<{ isPastRound: boolean; }>`
  width: 25px;
  right: 30px;
  position: absolute;
  border: 1px dashed ${({ theme, isPastRound }) => (isPastRound ? theme.main400 : theme.gray900)};
`;

const RoundLabel = styled.div<{ isPastRound: boolean; }>`
  color: ${({ theme, isPastRound }) => (isPastRound ? theme.main400 : theme.gray900)};
`;
