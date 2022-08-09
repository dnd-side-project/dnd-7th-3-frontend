import React, { ReactElement } from 'react';

import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

export const setGlobalStyles = css`
  ${emotionNormalize}

  body {
    font-family:'Apple SD Gothic', 'Noto Sans KR', '맑은고딕', sans-serif;
    box-sizing: border-box;
    // TODO - 추후 변경
    color: #9A9A9A;
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
