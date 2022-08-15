import React, { useCallback, useState } from 'react';

import styled from '@emotion/styled';

import { body1Font, subHead1Font } from '@/styles/fontStyles';

import Slider from '../common/Slider';

const radiusSteps = ['100m', '300m', '500m', '1km', '3km', '5km'];

interface FilterItemsProps {
  onChange?: () => void;
}

function FilterItems({ onChange }: FilterItemsProps) {
  const [step, setStep] = useState(1);

  const handleChange = useCallback((value: number) => {
    setStep(value);
    onChange?.();
  }, []);

  return (
    <>
      <FilterItemTitle>
        반경
      </FilterItemTitle>
      <FilterItemContents>
        <RadiusLabel>
          {radiusSteps.map((radius) => (
            <div key={radius}>{radius}</div>
          ))}
        </RadiusLabel>
        <Slider
          value={step}
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
  margin-bottom: 23px;
`;

const FilterItemContents = styled.div`
  ${body1Font}
  color: ${({ theme }) => theme.gray700};
  text-align: center;

`;

const RadiusLabel = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 5vw;
  margin-bottom: 23px;
`;
