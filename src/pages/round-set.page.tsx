import React from 'react';

import styled from '@emotion/styled';

import MobileWebLayout from '@/components/common/MobileWebLayout';
import RoundItems from '@/components/roundSet/RoundItems';

function RoundSetPage() {
  return (
    <MobileWebLayout>
      <RoundSetTitle>라운드 설정</RoundSetTitle>
      <RoundSetDescription>월드컵 라운드를 설정해주세요</RoundSetDescription>
      <RoundItems />
    </MobileWebLayout>
  );
}

export default RoundSetPage;

const RoundSetTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.05em;
  color: #FFFFFF;
  margin-bottom: 94px;
`;

const RoundSetDescription = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 24px;
  letter-spacing: -0.05em;
  color: #FFFFFF;
  margin-bottom: 49px;
`;
