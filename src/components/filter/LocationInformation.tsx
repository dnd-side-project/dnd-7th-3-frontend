import React from 'react';

import styled from '@emotion/styled';

import { captionFont } from '@/styles/fontStyles';

import LocationDotIcon from '../../assets/icons/location.svg';

function LocationInformation() {
  return (
    <LocationWrapper>
      <LocationDotIcon />
      <div>위치정보없음</div>
    </LocationWrapper>
  );
}

export default LocationInformation;

const LocationWrapper = styled.div`
  ${captionFont};
  color: ${({ theme }) => theme.gray100};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 38px;
  margin-bottom: 29px;

  & > svg {
    margin-right: 4px;
  }
`;
