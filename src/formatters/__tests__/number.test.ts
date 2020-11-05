import { formatNumberWithCommas } from '@formatters/number';

describe('number formatters', () => {
  test('should format numbers with commas', () => {
    expect(formatNumberWithCommas(909000)).toBe('909,000');
    expect(formatNumberWithCommas(9000)).toBe('9,000');
    expect(formatNumberWithCommas(1000000)).toBe('1,000,000');
    expect(formatNumberWithCommas(1333222)).toBe('1,333,222');
    expect(formatNumberWithCommas(0)).toBe('0');
  });
});
