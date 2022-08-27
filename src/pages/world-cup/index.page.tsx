import React, { useState } from 'react';

import { useRecoilValue } from 'recoil';

import RunWorldCup from '@/components/worldCup/RunWorldCup';
import WorldCupRoundProgress from '@/components/worldCup/WorldCupRoundProgress';
import { foodWorldCupFormState } from '@/recoil/foodFilter/atom';
import { checkNumNull } from '@/utils/utils';

function WorldCupPage() {
  const foodWorldCupForm = useRecoilValue(foodWorldCupFormState);
  const [currentRound, setCurrentRound] = useState<number>(checkNumNull(foodWorldCupForm.round));

  return (
    <>
      <WorldCupRoundProgress
        currentRound={currentRound}
      />
      <RunWorldCup
        currentRound={currentRound}
        setCurrentRound={setCurrentRound}
      />
    </>
  );
}

export default WorldCupPage;
