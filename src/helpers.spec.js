import { formatText } from './helpers';

describe('formatText', () => {
  it('should return an empty string if text is empty', () => {
    const text = '';
    const expected = '';
    expect(formatText(text)).toEqual(expected);
  });

  it('should return Vermilion City', () => {
    const text = 'vermilion-city';
    const expected = 'Vermilion City';
    expect(formatText(text)).toEqual(expected);
  });

  it('should work with multiple hyphens', () => {
    const text = 'vermilion-city-area';
    const expected = 'Vermilion City Area';
    expect(formatText(text)).toEqual(expected);
  });

  it('should still work if text does not contain a hyphen', () => {
    const text = 'vermilion';
    const expected = 'Vermilion';
    expect(formatText(text)).toEqual(expected);
  });
});
