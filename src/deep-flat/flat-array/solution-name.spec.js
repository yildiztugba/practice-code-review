import { solutionName } from './solution-name.js';

describe('', () => {
  it('not flatten array => flatten Array', () => {
    expect(
      solutionName([
        [1, 3, 4],
        [2, 4],
      ]),
    ).toEqual([1, 3, 4, 2, 4]);
  });

  it('not flatten array => flatten Array', () => {
    expect(
      solutionName([
        [1, 3, 4, 9],
        [2, 5, 4, 8],
      ]),
    ).toEqual([1, 3, 4, 9, 2, 5, 4, 8]);
  });

  it('not flatten array => flatten Array', () => {
    expect(
      solutionName([
        [2, 8, 10],
        [4, 6, 3],
      ]),
    ).toEqual([2, 8, 10, 4, 6, 3]);
  });

  it('not flatten array => flatten Array', () => {
    expect(
      solutionName([
        [-2, 8, 5],
        [3, '#', 'hi'],
      ]),
    ).toEqual([-2, 8, 5, 3, '#', 'hi']);
  });

  it('not flatten array => flatten Array', () => {
    expect(
      solutionName([
        ['hello', '@#', 4],
        [2, 4],
      ]),
    ).toEqual(['hello', '@#', 4, 2, 4]);
  });

  it('not flatten array => flatten Array', () => {
    expect(solutionName([['just test'], ['to check', 'ok']])).toEqual([
      'just test',
      'to check',
      'ok',
    ]);
  });

  it('not flatten array => flatten Array', () => {
    expect(
      solutionName([
        [1, '4'],
        [9, '&', '', '10'],
        [8, '8', '!'],
      ]),
    ).toEqual([1, '4', 9, '&', '', '10', 8, '8', '!']);
  });
});
