import { render, screen } from '@testing-library/react';

import MockTheme from '@/test/MockTheme';

import ExternalLink from './ExternalLink';

describe('ExternalLink', () => {
  const testId = 'external-link';

  const renderExternalLink = () => render((
    <MockTheme>
      <ExternalLink
        href="www.test.com"
        testId={testId}
      />
    </MockTheme>
  ));

  it('target 속성에 "_blank"옵션이 존재해야만 한다', () => {
    renderExternalLink();

    expect(screen.getByTestId(testId)).toHaveAttribute('target', '_blank');
  });
});
