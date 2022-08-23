import React, { useEffect, useState } from 'react';
import { useGeolocation } from 'react-use';

import styled from '@emotion/styled';

import { captionFont } from '@/styles/fontStyles';
import { checkNumNull, emptyAThenB } from '@/utils/utils';

import LocationDotIcon from '../../assets/icons/location.svg';

function LocationInformation() {
  const geolocation = useGeolocation();
  const [currentLocation, setCurrentLocation] = useState<string>('');

  useEffect(() => {
    if (geolocation.loading) {
      setCurrentLocation('로딩중...');
      return;
    }

    naver.maps.Service.reverseGeocode({
      coords: new naver
        .maps.LatLng(checkNumNull(geolocation.latitude), checkNumNull(geolocation.longitude)),
    }, (status, response) => {
      if (status !== naver.maps.Service.Status.OK) {
        setCurrentLocation('');
        return;
      }

      const { v2: { address } } = response;

      setCurrentLocation(emptyAThenB(address.jibunAddress, address.roadAddress));
    });
  }, [geolocation]);

  return (
    <LocationWrapper>
      <LocationDotIcon />
      <div>{emptyAThenB('위치정보없음', currentLocation)}</div>
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
  margin-top: 59px;
  margin-bottom: 29px;

  & > svg {
    margin-right: 4px;
  }
`;
