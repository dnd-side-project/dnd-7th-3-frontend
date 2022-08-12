import { fireEvent, render, screen } from '@testing-library/react';

import Slider from './Slider';

describe('Slider', () => {
  const onChange = jest.fn();

  const renderSlider = () => render((
    <Slider
      value={50}
      max={100}
      step={1}
      onChange={onChange}
    />
  ));

  context('slider를 움직이면', () => {
    it('onChange가 호출되어야만 한다.', () => {
      renderSlider();

      const slider = screen.getByRole('slider');

      fireEvent.mouseDown(slider);
      fireEvent.mouseMove(slider, {
        clientX: 16,
      });

      expect(onChange).toBeCalled();
    });
  });
});
