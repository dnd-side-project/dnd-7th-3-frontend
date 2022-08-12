import { fireEvent, render, screen } from '@testing-library/react';

import FilterItems from './FilterItems';

describe('FilterItems', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderFilterItems = () => render((
    <FilterItems onChange={handleChange} />
  ));

  describe('반경 slider를 조절한다', () => {
    it('change 이벤트가 호출되어야만 한다.', () => {
      renderFilterItems();

      const slider = screen.getByRole('slider');

      fireEvent.mouseDown(slider);
      fireEvent.mouseMove(slider, {
        clientX: 14,
      });

      expect(handleChange).toBeCalled();
    });
  });
});
