import React from 'react';

import { useRecoilValue } from 'recoil';

import { worldCupState } from '@/recoil/worldCup/atom';

import WorldCupItem from './WorldCupItem';

function ResultWorldCupItem() {
  const worldCupItems = useRecoilValue(worldCupState);

  const winnerItem = worldCupItems.find((item) => item.round === 1);

  if (!winnerItem) {
    return null;
  }

  return (
    <WorldCupItem
      worldCupItem={winnerItem}
    />
  );
}

export default ResultWorldCupItem;
