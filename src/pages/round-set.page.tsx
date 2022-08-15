import React from 'react';

import styled from '@emotion/styled';

import MobileWebLayout from '@/components/common/MobileWebLayout';
import RoundItems from '@/components/roundSet/RoundItems';
import { body1Font, heading2Font } from '@/styles/fontStyles';

function RoundSetPage() {
  return (
    <MobileWebLayout>
      <RoundSetTitle>라운드를 설정해주세요</RoundSetTitle>
      <RoundSetDescription>진행하고싶은 월드컵 라운드를 선택해주세요</RoundSetDescription>
      <RoundItems />
    </MobileWebLayout>
  );
}

export default RoundSetPage;

const RoundSetTitle = styled.div`
  ${heading2Font};
  color: ${({ theme }) => theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 12px;
`;

const RoundSetDescription = styled.div`
  ${body1Font};
  color: ${({ theme }) => theme.gray500};
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
`;
