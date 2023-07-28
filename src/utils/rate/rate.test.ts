import { rate, toFa } from '../index';
import { RatesColors } from '../../constants';

describe('rate function', () => {
  it('should return correct values for rate = 0', () => {
    const input = { rate: 0 };
    const expectedOutput = {
      rateColor: RatesColors[0],
      rateText: 'رایگان',
    };

    const result = rate(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should return correct values for rate = 2.3', () => {
    const input = { rate: 2.3 };
    const expectedOutput = {
      rateColor: RatesColors[(Math.ceil(input.rate * 2) / 2 - 0.5) * 10],
      rateText: toFa(input.rate.toFixed(1)),
    };

    const result = rate(input);

    expect(result).toEqual(expectedOutput);
  });
});
