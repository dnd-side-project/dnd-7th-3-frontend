import React from 'react';

import styled from '@emotion/styled';

import MobileWebLayout from '@/components/common/MobileWebLayout';
import RoundSet from '@/components/roundSet/RoundSet';

function RoundSetPage() {
  return (
    <RoundSetPageLayout>
      <RoundSet />
    </RoundSetPageLayout>
  );
}

export default RoundSetPage;

const RoundSetPageLayout = styled(MobileWebLayout)`
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
