import { render, screen } from '@testing-library/react';

import lightTheme from '@/styles/theme';
import MockTheme from '@/test/MockTheme';

import RoundProgressItem from './RoundProgressItem';

describe('RoundProgressItem', () => {
  const renderRoundProgressItem = () => render((
    <MockTheme>
      <RoundProgressItem
        roundLabel="16강"
        isPastRound={given.isPastRound}
        isFirstRound={given.isFirstRound}
      />
    </MockTheme>
  ));

  context('isPastRound가 true인 경우', () => {
    given('isPastRound', () => true);

    it(`색상이 ${lightTheme.main400}이여야만 한다`, () => {
      renderRoundProgressItem();

      expect(screen.getByTestId('round-label')).toHaveStyle({
        color: lightTheme.main400,
      });
    });
  });

  context('isPastRound가 false인 경우', () => {
    given('isPastRound', () => false);

    it(`색상이 ${lightTheme.gray900}이여야만 한다`, () => {
      renderRoundProgressItem();

      expect(screen.getByTestId('round-label')).toHaveStyle({
        color: lightTheme.gray900,
      });
    });
  });

  context('isFirstRound가 false인 경우', () => {
    given('isFirstRound', () => false);

    it('progress line이 나타나야만 한다', () => {
      renderRoundProgressItem();

      expect(screen.getByTestId('progress-line')).toBeInTheDocument();
    });
  });
});
