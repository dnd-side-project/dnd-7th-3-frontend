import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import FIXTURE_FOOD_WORLD_CUP_ITEM from '@/fixtures/foodWorldCupItem';
import { FoodWorldCupItem } from '@/models/worldCup';
import InjectTestingRecoil from '@/test/InjectTestingRecoil';

import RunWorldCup from './RunWorldCup';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('RunWorldCup', () => {
  const setCurrentRound = jest.fn();
  const mockRouter = jest.fn();

  const mockWorldCupItem: FoodWorldCupItem = {
    ...FIXTURE_FOOD_WORLD_CUP_ITEM,
    round: 4,
  };

  beforeEach(() => {
    jest.clearAllMocks();

    (useRouter as jest.Mock).mockImplementation(() => ({
      push: mockRouter,
      replace: mockRouter,
    }));
  });

  const renderRunWorldCup = () => render((
    <InjectTestingRecoil worldCupItems={given.worldCupItems}>
      <RunWorldCup
        currentRound={given.currentRound || 4}
        setCurrentRound={setCurrentRound}
      />
    </InjectTestingRecoil>
  ));

  context('월드컵 항목이 존재하지 않는 경우', () => {
    given('worldCupItems', () => []);

    it('replace가 "/"와 함께 호출되어야만 한다', () => {
      renderRunWorldCup();

      expect(mockRouter).toBeCalledWith('/');
    });
  });

  context('월드컵 항목이 존재하는 경우', () => {
    describe('월드컵 항목을 클릭한다', () => {
      given('worldCupItems', () => [
        mockWorldCupItem, {
          ...mockWorldCupItem,
          id: 'test',
        },
      ]);

      it('"선택" 버튼이 나타나야만 한다', () => {
        const { container } = renderRunWorldCup();

        fireEvent.click(screen.getAllByTestId('world-cup-item-wrapper')[0]);

        expect(container).toHaveTextContent('선택');
      });
    });

    describe('월드컵 항목을 클릭 후 "선택" 버튼을 클릭한다', () => {
      context('다음 진행될 강수가 마지막인 경우', () => {
        given('currentRound', () => 2);
        given('worldCupItems', () => [
          {
            ...mockWorldCupItem,
            id: 'test2',
            round: 2,
          }, {
            ...mockWorldCupItem,
            id: 'test3',
            round: 2,
          },
        ]);

        it('push가 "/world-cup/result"와 함께 호출되어야만 한다', () => {
          renderRunWorldCup();

          fireEvent.click(screen.getAllByTestId('world-cup-item-wrapper')[0]);
          fireEvent.click(screen.getByText('선택'));

          expect(mockRouter).toBeCalledWith('/world-cup/result');
        });
      });

      context('다음 진행될 월드컵이 존재하는 경우', () => {
        given('currentRound', () => 4);
        given('worldCupItems', () => [
          mockWorldCupItem, {
            ...mockWorldCupItem,
            id: 'test1',
          }, {
            ...mockWorldCupItem,
            id: 'test2',
          }, {
            ...mockWorldCupItem,
            id: 'test3',
          },
        ]);

        it('다음 월드컵 항목이 보이고 "선택" 버튼이 안보여야만 한다', () => {
          const { container } = renderRunWorldCup();

          fireEvent.click(screen.getAllByTestId('world-cup-item-wrapper')[0]);
          fireEvent.click(screen.getByText('선택'));

          expect(container).not.toHaveTextContent('선택');
        });
      });

      context('다음 진행될 강이 존재하는 경우', () => {
        given('currentRound', () => 4);
        given('worldCupItems', () => [
          mockWorldCupItem, {
            ...mockWorldCupItem,
            id: 'test1',
          }, {
            ...mockWorldCupItem,
            id: 'test2',
          }, {
            ...mockWorldCupItem,
            id: 'test3',
          },
        ]);

        it('다음 강수가 되고 "선택" 버튼이 안보여야만 한다', () => {
          const { container } = renderRunWorldCup();

          fireEvent.click(screen.getAllByTestId('world-cup-item-wrapper')[0]);
          fireEvent.click(screen.getByText('선택'));
          fireEvent.click(screen.getAllByTestId('world-cup-item-wrapper')[0]);
          fireEvent.click(screen.getByText('선택'));

          expect(container).not.toHaveTextContent('선택');
        });
      });
    });
  });
});
