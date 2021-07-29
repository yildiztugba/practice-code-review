//import { solutionName } from './solution-name.js';
export const solutionName = (nestedArray = []) => {
  return nestedArray.flat(Infinity);
};

describe('Flatten a nested array', () => {
  it('[1, 2, [3]] => [1, 2, 3]', () => {
    expect(solutionName([1, 2, [3]])).toEqual([1, 2, 3]);
  });
  it('[1, 2, [3, [4]]] => [1, 2, 3, 4]', () => {
    expect(solutionName([1, 2, [3, [4]]])).toEqual([1, 2, 3, 4]);
  });
});

/*
describe('', () => {
it('', () => {
expect(solutionName([1,2, [3],5])).toEqual([1,2,3,5]);
});

it('', () => {
expect(solutionName([1,[2,[3]],4,5])).toEqual([1, 2, 3,4, 5]);
});
}); 
*/
