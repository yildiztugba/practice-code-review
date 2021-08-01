import { deepFlat } from './deepFlat.js';

describe('', () => {
  it('[1, 2, [3], 5] =>', () => {
    expect(deepFlat([1, 2, [3], 5])).toEqual([1, 2, 3, 5]);
  });

  it('', () => {
    expect(deepFlat([1, [2, [3]], 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
