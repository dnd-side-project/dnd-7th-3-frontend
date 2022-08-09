/* eslint-disable react/jsx-props-no-spreading */
import React, { HTMLProps, PropsWithChildren, ReactElement } from 'react';

import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';

export type ColorType = 'orange';

interface ButtonProps extends HTMLProps<HTMLButtonElement | HTMLAnchorElement> {
  color?: ColorType;
  borderRadius?: number;
}

interface StyledButtonProps {
  color: ColorType;
  theme: Theme;
  borderRadius: number;
}

function Button({
  href, type = 'button', borderRadius = 24.5, color = 'orange', children, ...rest
}: PropsWithChildren<ButtonProps>): ReactElement {
  const htmlProps = rest as any;

  if (href) {
    return (
      <Link href={href} passHref>
        <StyledLink
          color={color}
          borderRadius={borderRadius}
          {...htmlProps}
        >
          {children}
        </StyledLink>
      </Link>
    );
  }

  return (
    <StyledButton
      type={type}
      color={color}
      borderRadius={borderRadius}
      {...htmlProps}
    >
      {children}
    </StyledButton>
  );
}

export default Button;

const ButtonWrapper = ({
  borderRadius, color,
}: StyledButtonProps) => css`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.05em;
  cursor: pointer;
  position: relative;
  transform: translateZ(0);
  user-select: none;
  transition:
    color .1s ease-in-out,
    background-color .1s ease-in-out,
    border-color .1s ease-in-out,
    opacity .1s ease-in-out;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  border-radius: ${`${borderRadius}px`};
  height: 49px;
  padding: 0 66px;

  @media(hover: hover) and (pointer: fine) {
    &:not(:disabled):after {
      content: " ";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #000000;
      opacity: 0;
      transition: opacity .1s ease-in-out;
    }

    &:not(:disabled):not(.disabled):hover:after {
      opacity: 0.1;
    }
  }

  ${color === 'orange' && css`
    color: #ffffff;
    background-color: #EB4F27;
  `}

  &:disabled {
    color: #8D8D8D;
    background-color: #6F6F6F;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledLink = styled.a<StyledButtonProps>`
  ${ButtonWrapper}
`;

const StyledButton = styled.button<StyledButtonProps>`
  ${ButtonWrapper}
`;
