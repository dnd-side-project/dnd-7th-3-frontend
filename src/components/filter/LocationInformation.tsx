import React, { useEffect } from 'react';
import { useGeolocation } from 'react-use';

import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import { currentAddressState } from '@/recoil/currentLocation/atom';
import { foodWorldCupFormState } from '@/recoil/foodFilter/atom';
import { captionFont } from '@/styles/fontStyles';
import { emptyAThenB } from '@/utils/utils';

import LocationDotIcon from '../../assets/icons/location.svg';

function LocationInformation() {
  const geolocation = useGeolocation();
  const [currentAddress, setCurrentAddress] = useRecoilState(currentAddressState);
  const [foodWorldCupForm, setFoodWorldCupForm] = useRecoilState(foodWorldCupFormState);

  useEffect(() => {
    const { loading, latitude, longitude } = geolocation;

    if (foodWorldCupForm.latitude && foodWorldCupForm.longitude) {
      return;
    }

    if (loading) {
      setCurrentAddress('로딩중...');
      return;
    }

    if (!latitude || !longitude) {
      setCurrentAddress('');
      return;
    }

    setFoodWorldCupForm((prev) => ({
      ...prev,
      latitude,
      longitude,
    }));

    naver?.maps?.Service?.reverseGeocode({
      coords: new naver
        .maps.LatLng(latitude, longitude),
    }, (status, response) => {
      if (status !== naver.maps.Service.Status.OK) {
        setCurrentAddress('');
        return;
      }

      const { v2: { address } } = response;

      setCurrentAddress(emptyAThenB(address.jibunAddress, address.roadAddress));
    });
  }, [geolocation]);

  return (
    <LocationWrapper>
      <LocationDotIcon />
      <div>{emptyAThenB('위치정보없음', currentAddress)}</div>
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
