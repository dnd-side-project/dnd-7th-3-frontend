import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { foodWorldCupFormState } from '@/recoil/foodFilter/atom';
import RecoilObserver from '@/test/RecoilObserver';

import FilterItems from './FilterItems';

describe('FilterItems', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderFilterItems = () => render((
    <RecoilRoot>
      <RecoilObserver node={foodWorldCupFormState} onChange={handleChange} />
      <FilterItems />
    </RecoilRoot>
  ));

  describe('반경 slider를 조절한다', () => {
    it('change 이벤트가 호출되어야만 한다.', () => {
      renderFilterItems();

      const slider = screen.getByRole('slider');

      fireEvent.mouseDown(slider);
      fireEvent.mouseMove(slider, {
        clientX: 14,
      });

      expect(handleChange).toBeCalledWith({
        food: [],
        latitude: null,
        longitude: null,
        radius: 100,
        round: null,
      });
    });
  });
});
