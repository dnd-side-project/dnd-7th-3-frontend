import { render } from '@testing-library/react';

import InjectTestingRecoil from '@/test/InjectTestingRecoil';

import WorldCupPage from './index.page';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    push: jest.fn(),
    replace: jest.fn(),
  })),
}));

describe('WorldCupPage', () => {
  const renderWorldCupPage = () => render((
    <InjectTestingRecoil>
      <WorldCupPage />
    </InjectTestingRecoil>
  ));

  it('월드컵에 대한 내용이 나타나야만 한다', () => {
    const { container } = renderWorldCupPage();

    expect(container).toHaveTextContent('16강');
  });
});
