import React from 'react';

import styled from '@emotion/styled';

import Button from '@/components/common/Button';
import getNavigationHeaderLayout from '@/components/common/NavigationHeaderGetLayout';
import FilterItems from '@/components/filter/FilterItems';
import LocationInformation from '@/components/filter/LocationInformation';
import { body1Font, heading2Font } from '@/styles/fontStyles';

function FilterRadiusPage() {
  return (
    <>
      <div>
        <FilterRadiusTileSection>
          <LocationInformation />
          <div className="radius-title">거리를 설정해주세요</div>
          <div className="radius-description">거리를 설정하면 그에맞는 음식점으로 게임이 진행되요!</div>
        </FilterRadiusTileSection>
        <FilterItems />
      </div>
      <Button href="/round-set">
        다음
      </Button>
    </>
  );
}

export default FilterRadiusPage;

FilterRadiusPage.getLayout = getNavigationHeaderLayout({
  activeDot: 'radius',
  goBackHref: '/filter/menu',
  nextHref: '/round-set',
});

const FilterRadiusTileSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  & > div.radius-title {
    ${heading2Font};
    color: ${({ theme }) => theme.white};
    margin-bottom: 12px;
  }

  & > div.radius-description {
    ${body1Font};
    color: ${({ theme }) => theme.gray500};
  }
`;
