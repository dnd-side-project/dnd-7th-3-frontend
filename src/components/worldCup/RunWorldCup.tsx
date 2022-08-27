import React, { useCallback, useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { FoodWorldCupItem } from '@/models/worldCup';
import { worldCupState } from '@/recoil/worldCup/atom';

import Button from '../common/Button';

import WorldCupItem from './WorldCupItem';

type CurrentIndex = {
  firstItemIndex: number;
  secondItemIndex: number;
}

interface RunWorldCupProps {
  currentRound: number;
  setCurrentRound: (nextRound: number) => void;
}

function RunWorldCup({ currentRound, setCurrentRound }: RunWorldCupProps) {
  const { push, replace } = useRouter();
  const [worldCupItems, setWorldCupItems] = useRecoilState(worldCupState);

  const [selectedItemId, setSelectedItemId] = useState<string>();
  const [currentIndex, setCurrentIndex] = useState<CurrentIndex>({
    firstItemIndex: 0, secondItemIndex: 1,
  });
  const [currentWorldCupItems, setCurrentWorldCupItems] = useState<FoodWorldCupItem[]>(
    worldCupItems,
  );

  const firstItem = currentWorldCupItems[currentIndex.firstItemIndex];
  const secondItem = currentWorldCupItems[currentIndex.secondItemIndex];

  const onSelectedItem = useCallback((selectedId: string) => setSelectedItemId(selectedId), []);

  const onSelect = useCallback(() => {
    const nextTotalWorldCupItems = worldCupItems.map((item) => {
      if (item.id === selectedItemId) {
        return {
          ...item,
          round: item.round / 2,
        };
      }

      return item;
    });

    setWorldCupItems(nextTotalWorldCupItems);

    const { firstItemIndex, secondItemIndex } = currentIndex;

    if (secondItemIndex + 2 < currentWorldCupItems.length) {
      setCurrentIndex({
        firstItemIndex: firstItemIndex + 2,
        secondItemIndex: secondItemIndex + 2,
      });
      setSelectedItemId(undefined);
      return;
    }

    const nextRound = currentRound / 2;
    const nextCurrentWorldCupItems = nextTotalWorldCupItems
      .filter((item) => item.round === nextRound);

    if (nextCurrentWorldCupItems.length === 1) {
      push('/world-cup/result');
      return;
    }

    setCurrentWorldCupItems(nextCurrentWorldCupItems);
    setCurrentRound(nextRound);
    setCurrentIndex({
      firstItemIndex: 0,
      secondItemIndex: 1,
    });
    setSelectedItemId(undefined);
  }, [worldCupItems, selectedItemId, currentRound, currentIndex]);

  useEffect(() => {
    if (!worldCupItems.length) {
      replace('/');
    }
  }, []);

  if (!worldCupItems.length) {
    return null;
  }

  return (
    <RunWorldCupWrapper>
      <WorldCupItem
        worldCupItem={firstItem}
        selectedItemId={selectedItemId}
        onClick={onSelectedItem}
      />
      <WorldCupItem
        worldCupItem={secondItem}
        selectedItemId={selectedItemId}
        onClick={onSelectedItem}
      />
      {!!selectedItemId && (
        <Button type="button" onClick={onSelect}>
          선택
        </Button>
      )}
    </RunWorldCupWrapper>
  );
}

export default RunWorldCup;

const RunWorldCupWrapper = styled.div`
  position: relative;
  margin-top: 23px;

  & > div:first-of-type {
    margin-bottom: 15px;
  }

  & > div:last-of-type {
    margin-bottom: 25px;
  }
`;
