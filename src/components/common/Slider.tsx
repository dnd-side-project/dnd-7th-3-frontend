import { ReactElement } from 'react';
import InputRange from 'react-input-range';

import styled from '@emotion/styled';

import 'react-input-range/lib/css/index.css';

interface Props {
  value: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
}

function Slider({
  value, max, step, onChange,
}: Props): ReactElement {
  return (
    <SliderWrapper>
      <InputRange
        value={value}
        minValue={0}
        maxValue={max}
        step={step}
        onChange={onChange as any}
      />
    </SliderWrapper>
  );
}

export default Slider;

const SliderWrapper = styled.div`
  margin: 0 10px;

  .input-range__label {
    display: none;
  }

  .input-range__track {
    height: 10px;
    border-radius: 5px;
    background: #202020;
  }

  .input-range__track--active {
    background: #EB4F27;
  }

  .input-range__slider {
    width: 29px;
    height: 29px;
    border: none;
    border-radius: 50%;
    background: #222529;
    margin-top: -19px;
    box-shadow: 0px 4px 10px 15px rgba(235, 79, 39, 0.05);
  }
`;
