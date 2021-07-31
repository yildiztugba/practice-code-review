import { flattenedArray } from './flattenedArray.js';

describe('flatten a given array', () => {
  it(' two array => flattened Array', () => {
    expect(
      flattenedArray([
        [1, 3, 4],
        [2, 4],
      ]),
    ).toEqual([1, 3, 4, 2, 4]);
  });

  it('to flatten array => flattened Array', () => {
    expect(
      flattenedArray([
        [1, 3, 4, 9],
        [2, 5, 4, 8],
      ]),
    ).toEqual([1, 3, 4, 9, 2, 5, 4, 8]);
  });
  it('to flatten array => flattened Array', () => {
    expect(
      flattenedArray([
        [2, 8, 10],
        [4, 6, 3],
      ]),
    ).toEqual([2, 8, 10, 4, 6, 3]);
  });

  it('to flatten array => flattened Array', () => {
    expect(
      flattenedArray([
        [-2, 8, 5],
        [3, '#', 'hi'],
      ]),
    ).toEqual([-2, 8, 5, 3, '#', 'hi']);
  });

  it('to flatten string array =>  flattened string Array', () => {
    expect(flattenedArray([['hello', '@#'], ['hi']])).toEqual([
      'hello',
      '@#',
      'hi',
    ]);
  });

  it('mixed to flatten array  => mixed flattened Array', () => {
    expect(
      flattenedArray([
        ['just test', 1],
        ['to check', 'ok'],
      ]),
    ).toEqual(['just test', 1, 'to check', 'ok']);
  });

  it('mixed array => flattened mixed Array', () => {
    expect(
      flattenedArray([
        [1, '4'],
        [9, '&', '', '10'],
        [8, '8', '!'],
      ]),
    ).toEqual([1, '4', 9, '&', '', '10', 8, '8', '!']);
  });
});
