import React from 'react';

import styled from '@emotion/styled';

import MobileWebLayout from '@/components/common/MobileWebLayout';
import FilterItems from '@/components/filter/FilterItems';

function FilterPage() {
  return (
    <MobileWebLayout>
      <FilterTile>
        <div>라운드 설정</div>
        <FilterDescription>
          <div>어떤 음식점에서 먹고싶으신가요?</div>
          <div>조건을 설정하면 그에맞는 월드컵이 진행되요!</div>
        </FilterDescription>
      </FilterTile>
      <FilterItems />
    </MobileWebLayout>
  );
}

export default FilterPage;

const FilterTile = styled.div`
  display: flex;
  flex-direction: column;
  
  & > div:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 17px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.05em;
    color: #FFFFFF;

    margin-bottom: 40px;
  }
`;

const FilterDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > div:first-of-type {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: -0.05em;
    color: #FFFFFF;
    margin-bottom: 10px;
  }

  & > div:last-of-type {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.05em;
    color: #BDBDBD;
    margin-bottom: 40px;
  }
`;
