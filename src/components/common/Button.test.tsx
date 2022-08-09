import { ComponentProps } from 'react';

import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  const renderButton = ({ color, href }: ComponentProps<typeof Button>) => render((
    <Button
      color={color}
      href={href}
    >
      버튼
    </Button>
  ));

  describe('버튼 색상 속성에 따라서 스타일 속성이 다르다', () => {
    context('색상 속성이 "orange"인 경우', () => {
      it('배경색이 #EB4F27 이어야만 한다', () => {
        renderButton({ color: 'orange' });

        expect(screen.getByText('버튼')).toHaveStyle({
          'background-color': '#EB4F27',
        });
      });
    });
  });

  describe('"href" 속성 유무에 따라 버튼 또는 링크가 나타난다', () => {
    context('버튼인 경우', () => {
      it('"href" 속성이 없어야만 한다', () => {
        renderButton({});

        expect(screen.getByText('버튼')).not.toHaveAttribute('href', '/test');
      });
    });

    context('링크인 경우', () => {
      it('링크 정보가 나타나야만 한다', () => {
        renderButton({ href: '/test' });

        expect(screen.getByText('버튼')).toHaveAttribute('href', '/test');
      });
    });
  });
});
