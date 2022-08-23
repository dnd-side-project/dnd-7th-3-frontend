import { useGeolocation } from 'react-use';

import { render } from '@testing-library/react';

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
      latitude: 37.5221,
      longitude: 127.2313,
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
    <LocationInformation />
  ));

  context('위치정보 api가 로딩중인 경우', () => {
    given('loading', () => true);

    it('"로딩중..."문구가 나타나야만 한다', () => {
      const { container } = renderLocationInformation();

      expect(container).toHaveTextContent('로딩중...');
    });
  });

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
