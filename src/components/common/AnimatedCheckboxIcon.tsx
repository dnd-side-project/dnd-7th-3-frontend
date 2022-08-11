import React, { useState } from 'react';
import {
  animated, config, useChain, useSpring, useSpringRef,
} from 'react-spring';

import styled from '@emotion/styled';

import { checkNumNull } from '@/utils/utils';

interface AnimatedCheckboxIconProps {
  isChecked: boolean;
}

function AnimatedCheckboxIcon({ isChecked }: AnimatedCheckboxIconProps) {
  const [checkmarkLength, setCheckmarkLength] = useState<number>(0);

  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    opacity: isChecked ? 1 : 0,
    config: config.gentle,
    ref: checkboxAnimationRef,
  });

  const checkmarkAnimationRef = useSpringRef();
  const checkmarkAnimationStyle = useSpring({
    x: isChecked ? 0 : 13,
    ref: checkmarkAnimationRef,
    config: config.gentle,
  });

  useChain(
    isChecked
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.2],
  );

  return (
    <CheckedIcon
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <animated.circle
        cx={10.5}
        cy={10.5}
        r={10.5}
        fill="#EB4F27"
        style={checkboxAnimationStyle}
        data-testid="checkbox-circle"
      />
      <animated.path
        d="M7 11L10 13.5L15 8"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray={checkmarkLength}
        strokeDashoffset={checkmarkAnimationStyle.x}
        ref={(ref) => setCheckmarkLength(checkNumNull(ref?.getTotalLength?.()) + 1.5)}
      />
    </CheckedIcon>
  );
}

export default AnimatedCheckboxIcon;

const CheckedIcon = styled(animated.svg)`
  position: absolute;
  bottom: 0px;
  right: 0px;
`;
