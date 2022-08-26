import React, {
  AnchorHTMLAttributes, DetailedHTMLProps, PropsWithChildren,
} from 'react';

import styled from '@emotion/styled';

interface Props extends Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'rel' | 'target' | 'href'> {
  href: string;
  testId?: string;
}

function ExternalLink({
  href, testId, children, ...rest
}: PropsWithChildren<Props>) {
  return (
    <AnchorLink
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      data-testid={testId}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </AnchorLink>
  );
}

export default ExternalLink;

const AnchorLink = styled.a`
  transition: opacity 0.1s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
