import {
  body1Font,
  body2Font,
  captionFont,
  heading1Font, heading2Font, heading3Font, subHead1Font, subHead2Font,
} from './fontStyles';

describe('fontStyles', () => {
  it('heading3Font styles', () => {
    const result = heading3Font;

    expect(result.styles).toBe('font-weight:700;font-size:28px;line-height:36px;letter-spacing:-1.5px;');
  });

  it('heading2Font styles', () => {
    const result = heading2Font;

    expect(result.styles).toBe('font-weight:700;font-size:24px;line-height:32px;letter-spacing:-1px;');
  });

  it('heading1Font styles', () => {
    const result = heading1Font;

    expect(result.styles).toBe('font-weight:700;font-size:20px;line-height:28px;letter-spacing:-1px;');
  });

  it('subHead2Font styles', () => {
    const result = subHead2Font;

    expect(result.styles).toBe('font-weight:600;font-size:18px;line-height:24px;letter-spacing:-0.5px;');
  });

  it('subHead1Font styles', () => {
    const result = subHead1Font;

    expect(result.styles).toBe('font-weight:600;font-size:16px;line-height:22px;letter-spacing:-0.5px;');
  });

  it('body2Font styles', () => {
    const result = body2Font;

    expect(result.styles).toBe('font-weight:400;font-size:16px;line-height:22px;letter-spacing:-0.5px;');
  });

  it('body1Font styles', () => {
    const result = body1Font;

    expect(result.styles).toBe('font-weight:400;font-size:14px;line-height:20px;letter-spacing:-0.5px;');
  });

  it('captionFont styles', () => {
    const result = captionFont;

    expect(result.styles).toBe('font-weight:400;font-size:12px;line-height:18px;letter-spacing:-0.5px;');
  });
});
