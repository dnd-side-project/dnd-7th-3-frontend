import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';

import FIXTURE_FOOD_WORLD_CUP_ITEM from '@/fixtures/foodWorldCupItem';
import useFetchFoodWorldCup from '@/hooks/api/useFetchFoodWorldCup';
import lightTheme from '@/styles/theme';
import MockTheme from '@/test/MockTheme';

import RoundSet from './RoundSet';

jest.mock('@/hooks/api/useFetchFoodWorldCup');
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('RoundSet', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useFetchFoodWorldCup as jest.Mock).mockImplementation(() => ({
      data: [FIXTURE_FOOD_WORLD_CUP_ITEM],
      isFetching: given.isFetching,
      isSuccess: given.isSuccess,
    }));

    (useRouter as jest.Mock).mockImplementation(() => ({
      push: mockPush,
    }));
  });

  const renderRoundSet = () => render((
    <RecoilRoot>
      <MockTheme>
        <RoundSet />
      </MockTheme>
    </RecoilRoot>
  ));

  describe('Round를 선택한다.', () => {
    it('선택된 border 색상과 text 색상이 변경되어야만 한다', () => {
      renderRoundSet();

      const round16Element = screen.getByText('16강');

      fireEvent.click(round16Element);

      expect(round16Element).toHaveStyle({
        border: `1.5px solid ${lightTheme.main400}`,
        color: `${lightTheme.main400}`,
      });
    });

    it('"게임 시작" 버튼이 나타나야만 한다', () => {
      const { container } = renderRoundSet();

      fireEvent.click(screen.getByText('16강'));

      expect(container).toHaveTextContent('게임 시작');
    });

    describe('"게임 시작" 버튼을 클릭한다', () => {
      it('useFetchFoodWorldCup이 enabled "true"와 호출되어야만 한다', () => {
        renderRoundSet();

        fireEvent.click(screen.getByText('16강'));
        fireEvent.click(screen.getByText('게임 시작'));

        expect(useFetchFoodWorldCup).toBeCalledWith({
          food: [], latitude: 0, longitude: 0, radius: 300, round: 16,
        }, true);
      });
    });
  });

  context('데이터 패칭중인 경우', () => {
    given('isFetching', () => true);

    it('"로딩중..." 문구가 나타나야만 한다', () => {
      const { container } = renderRoundSet();

      fireEvent.click(screen.getByText('16강'));

      expect(container).toHaveTextContent('로딩중...');
    });
  });

  context('데이터 패칭에 성공한 경우', () => {
    given('isSuccess', () => true);

    it('router.push가 "/world-cup"과 함께 호출되어야만 한다', () => {
      renderRoundSet();

      expect(mockPush).toBeCalledWith('/world-cup');
    });
  });
});
