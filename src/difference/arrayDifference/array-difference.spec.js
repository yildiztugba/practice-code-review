import { arrayDifference } from './array-difference.js';

describe('arrayDifference:compares two arrays & returns a newArray with difference between the first & second arrays', () => {
  describe('returns empty array', () => {
    it('two empty arrays', () => {
      expect(arrayDifference([], [])).toEqual([]);
    });
    it('empty array vs an array of items', () => {
      expect(arrayDifference([], [1, 2, 3])).toEqual([]);
    });
    it('arrays of identical items', () => {
      expect(arrayDifference([3, 7, 9], [3, 7, 9])).toEqual([]);
    });
  });
  describe('Mixed scenarios ', () => {
    it('array of mixed items', () => {
      expect(arrayDifference(['a', 8, 'b', 6], ['hi', 'a', 8, 6])).toEqual([
        'b',
      ]);
    });
    it('complete difference', () => {
      expect(arrayDifference(['hello', 6, 'g', 2], ['a', 'b', 'c'])).toEqual([
        'hello',
        6,
        'g',
        2,
      ]);
    });
  });
});
