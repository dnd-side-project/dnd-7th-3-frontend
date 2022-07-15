import React, { ReactElement } from 'react';

import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

export const setGlobalStyles = css`
  ${emotionNormalize}

  body {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :disabled {
    cursor: not-allowed;
  }
`;

function GlobalStyles(): ReactElement {
  return (
    <Global styles={setGlobalStyles} />
  );
}

export default GlobalStyles;
