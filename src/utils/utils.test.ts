import { checkNull, checkNumNull, emptyAThenB } from './utils';

describe('checkNull', () => {
  context('value가 null일 경우', () => {
    it('빈 문자열을 반환해야만 한다', () => {
      const result = checkNull(null);

      expect(result).toBe('');
    });
  });

  context('value가 null이 아닌 경우', () => {
    it('입력된 값이 반환되어야만 한다', () => {
      const result = checkNull('nana');

      expect(result).toBe('nana');
    });
  });
});

describe('checkNumNull', () => {
  context('value가 null인 경우', () => {
    it('0을 반환해야 한다', () => {
      const result = checkNumNull(0);

      expect(result).toBe(0);
    });
  });

  context('value가 null이 아닌 경우', () => {
    it('입력된 값이 반환되어야 한다', () => {
      const result = checkNumNull(100);

      expect(result).toBe(100);
    });
  });
});

describe('emptyAThenB', () => {
  const b = 'B';

  context('null 또는 undefined인 경우', () => {
    it('첫 번째 인자를 반환야만 한다', () => {
      const result = emptyAThenB(b, null);

      expect(result).toBe(b);
    });
  });

  context('값이 존재하는 경우', () => {
    const a = 'test';

    it('두 번째 인자를 반환야만 한다', () => {
      const result = emptyAThenB(b, a);

      expect(result).toBe(a);
    });
  });
});
