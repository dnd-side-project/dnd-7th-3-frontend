import React from 'react';

import styled from '@emotion/styled';

import ResultWorldCupItem from '@/components/worldCup/ResultWorldCupItem';

function WorldCupResultPage() {
  return (
    <div>
      <WorldCupResultPageTitle>
        오늘 2차장소는
        <br />
        바로 여기 🔔
      </WorldCupResultPageTitle>
      <ResultTip>
        어디갈지 정했으니 얼른 자리를 옮겨볼까요? 🤘🏻
      </ResultTip>
      <ResultWorldCupItem />
    </div>
  );
}

export default WorldCupResultPage;

const WorldCupResultPageTitle = styled.div`
  color: ${({ theme }) => theme.white};
`;

const ResultTip = styled.div`
  color: ${({ theme }) => theme.gray200};
`;
