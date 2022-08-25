import { useGeolocation } from 'react-use';

import { render } from '@testing-library/react';

import InjectTestingRecoil from '@/test/InjectTestingRecoil';

import LocationInformation from './LocationInformation';

jest.mock('react-use', () => ({
  useGeolocation: jest.fn(),
}));

describe('LocationInformation', () => {
  const LatLng = jest.fn();
  const reverseGeocodeResponse = {
    v2: {
      address: {
        jibunAddress: '서울특별시 강남구 삼성동',
        roadAddress: '',
      },
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();

    (useGeolocation as jest.Mock).mockImplementation(() => ({
      loading: given.loading,
      latitude: given.latitude,
      longitude: given.longitude,
    }));

    const naver = {
      maps: {
        LatLng,
        Service: {
          reverseGeocode: jest.fn((_, callback) => callback(given.status, reverseGeocodeResponse)),
          Status: {
            OK: 'OK',
          },
        },
      },
    };

    global.naver = (naver as any);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const renderLocationInformation = () => render((
    <InjectTestingRecoil
      foodWorldCupForm={given.foodWorldCupForm}
      currentAddress={given.currentAddress}
    >
      {/* <RecoilObserver node={currentAddressState} /> */}
      <LocationInformation />
    </InjectTestingRecoil>
  ));

  context('이미 위치정보가 존재하는 경우', () => {
    const currentAddress = '광진구 화양동';

    given('currentAddress', () => currentAddress);
    given('foodWorldCupForm', () => ({
      food: [],
      latitude: 39,
      longitude: 123,
      radius: 300,
      round: null,
    }));

    it('위치정보가 나타나야만 한다', () => {
      const { container } = renderLocationInformation();

      expect(container).toHaveTextContent(currentAddress);
    });
  });

  context('위치정보 api가 로딩중인 경우', () => {
    given('loading', () => true);

    it('"로딩중..."문구가 나타나야만 한다', () => {
      const { container } = renderLocationInformation();

      expect(container).toHaveTextContent('로딩중...');
    });
  });

  context('위치정보를 불러오지 못한 경우', () => {
    given('latitude', () => null);
    given('longitude', () => null);

    it('"위치정보없음" 문구가 나타나야만 한다', () => {
      const { container } = renderLocationInformation();

      expect(container).toHaveTextContent('위치정보없음');
    });
  });

  context('위치정보를 불러온 경우', () => {
    given('latitude', () => 37.5221);
    given('longitude', () => 127.2313);

    context('햔재 위치 정보의 주소가 변환이 정상적이지 않은 경우', () => {
      given('status', () => 'ERROR');

      it('"위치정보없음" 문구가 나타나야만 한다', () => {
        const { container } = renderLocationInformation();

        expect(container).toHaveTextContent('위치정보없음');
      });
    });

    context('햔재 위치 정보의 주소가 정상적으로 변환된 경우', () => {
      given('status', () => 'OK');

      it('변횐된 현재 주소가 나타나야만 한다', () => {
        const { container } = renderLocationInformation();

        expect(container).toHaveTextContent(reverseGeocodeResponse.v2.address.jibunAddress);
      });
    });
  });
});
