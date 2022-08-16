/* eslint-disable react/jsx-props-no-spreading */
import React, { PropsWithChildren, useEffect } from 'react';

import styled from '@emotion/styled';

import mobileWebMQ from '@/styles/responsive';

function MobileWebLayout({ children, ...rest }: PropsWithChildren<unknown>) {
  const handleResize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <MobileWebLayoutWrapper {...rest}>
      <ContainerWrapper>
        {children}
      </ContainerWrapper>
    </MobileWebLayoutWrapper>
  );
}

export default MobileWebLayout;

const MobileWebLayoutWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  height: 100%;
  background-color: ${({ theme }) => theme.gray900};
`;

const ContainerWrapper = styled.div`
  padding: 40px 25px 50px 25px;
  min-height: calc(100% - 90px);
  background-color: ${({ theme }) => theme.black};
  height: auto;

  ${mobileWebMQ({
    position: [false, 'relative'],
    width: ['calc(100% - 50px)', 'auto'],
    maxWidth: [false, '450px'],
    minHeight: ['calc((var(--vh, 1vh) * 100) - 90px)'],
    margin: [false, '0 auto'],
  })}

  &::before {
  ${({ theme }) => mobileWebMQ({
    content: [false, '" "'],
    position: 'absolute',
    left: '-1px',
    top: 0,
    bottom: 0,
    borderLeft: `1px solid ${theme.gray500}`,
  })}
  }

  &::after {
  ${({ theme }) => mobileWebMQ({
    content: [false, '" "'],
    position: 'absolute',
    right: '-1px',
    top: 0,
    bottom: 0,
    borderLeft: `1px solid ${theme.gray500}`,
  })}
  }
`;
