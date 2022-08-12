import React, { useState } from 'react';

import styled from '@emotion/styled';

import Slider from '../common/Slider';

const radiusSteps = ['100m', '300m', '500m', '1km', '3km', '5km'];

interface FilterItemsProps {
  onChange?: () => void;
}

function FilterItems({ onChange }: FilterItemsProps) {
  const [step, setStep] = useState(1);

  const handleChange = (value: number) => {
    setStep(value);
    onChange?.();
  };

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
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: start;
  letter-spacing: -0.05em;

  color: #FFFFFF;
  margin-bottom: 23px;
`;

const FilterItemContents = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.05em;

  color: #8C8C8C;
`;

const RadiusLabel = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 5vw;
  margin-bottom: 23px;
`;
