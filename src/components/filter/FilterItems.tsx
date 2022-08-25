import React, { useCallback } from 'react';

import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import { foodWorldCupFormState } from '@/recoil/foodFilter/atom';
import { body1Font, subHead1Font } from '@/styles/fontStyles';
import mobileWebMQ from '@/styles/responsive';

import Slider from '../common/Slider';

const radiusSteps = [
  { key: 100, name: '100m' },
  { key: 300, name: '300m' },
  { key: 500, name: '500m' },
  { key: 1000, name: '1km' },
  { key: 3000, name: '3km' },
  { key: 5000, name: '5km' },
];

function FilterItems() {
  const [{ radius }, setFoodWorldCupForm] = useRecoilState(foodWorldCupFormState);

  const handleChange = useCallback((value: number) => {
    setFoodWorldCupForm((prev) => ({
      ...prev,
      radius: radiusSteps[value].key,
    }));
  }, []);

  return (
    <>
      <FilterItemTitle>
        반경
      </FilterItemTitle>
      <FilterItemContents>
        <RadiusLabel>
          {radiusSteps.map(({ key, name }) => (
            <div key={key}>{name}</div>
          ))}
        </RadiusLabel>
        <Slider
          value={radiusSteps.findIndex(({ key }) => key === radius)}
          onChange={handleChange}
          max={5}
        />
      </FilterItemContents>
    </>
  );
}

export default FilterItems;

const FilterItemTitle = styled.div`
  ${subHead1Font};
  color: ${({ theme }) => theme.white};
  text-align: start;
  margin-bottom: 15px;
`;

const FilterItemContents = styled.div`
  ${body1Font}
  color: ${({ theme }) => theme.gray700};
  text-align: center;

`;

const RadiusLabel = styled.div`
  ${mobileWebMQ({
    gridColumnGap: ['5vw', '55px'],
  })};

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 16px;
`;
