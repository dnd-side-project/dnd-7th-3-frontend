import React, { useState } from 'react';

import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import RunWorldCup from '@/components/worldCup/RunWorldCup';
import { foodWorldCupFormState } from '@/recoil/foodFilter/atom';
import { checkNumNull } from '@/utils/utils';

function WorldCupPage() {
  const foodWorldCupForm = useRecoilValue(foodWorldCupFormState);
  const [currentRound, setCurrentRound] = useState<number>(checkNumNull(foodWorldCupForm.round));

  return (
    <>
      <WorldCupHeader>
        <div>
          16강
        </div>
        <div>
          8강
        </div>
        <div>
          4강
        </div>
        <div>
          FINAL
        </div>
      </WorldCupHeader>
      <RunWorldCup
        currentRound={currentRound}
        setCurrentRound={setCurrentRound}
      />
    </>
  );
}

export default WorldCupPage;

const WorldCupHeader = styled.div`
  color: ${({ theme }) => theme.white};
`;
