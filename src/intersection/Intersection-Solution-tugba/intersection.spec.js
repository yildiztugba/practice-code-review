import { intersection} from './intersection.js';

describe('Test 1: Numbers', () => {
  it('Positive numbers:[1,4,6,7],[2,3,4,5,6] => [4,6]', () => {
    expect(intersection([1,4,6,7],[2,3,4,5,6])).toEqual([4,6]);
  });
  it('Negative numbers:[-2,-66,-8,12],[-8] => [-8]', () => {
    expect(intersection([-2,-66,-8,12],[-8])).toEqual([-8]);
  });
});

describe('Test 2: Strings', () => {
  it('["john", "jimmy", "jack"],["jimmy", "jason"] => ["jimmy"]', () => {
    expect(intersection(["john", "jimmy", "jack"],["jimmy", "jason"])).toEqual(["jimmy"]);
  });
});

describe('Test 3: Null', () => {
  it('Number & Null: [23,44,7,10,0],[] => []', () => {
    expect(intersection([23,44,7,10,0],[])).toEqual([]);
  });
  it('Null & Null: [],[] => []', () => {
    expect(intersection([],[])).toEqual([]);
  });
});
describe('Test 4: undefined', () => {
  it('Number & undefined: [23,44,7,10,0], undefined => []', () => {
    expect(intersection([23,44,7,10,0],undefined)).toEqual([]);
  });
  it('undefined & undefined: undefined,undefined => []', () => {
    expect(intersection(undefined,undefined)).toEqual([]);
  });
});

describe('Test 5: Mix Type', () => {
  it('Number & String:[23,44,7,10,0],["jimmy","jason","0"] => []', () => {
    expect(intersection([23,44,7,10,0],["jimmy","jason","0"])).toEqual([]);
  });
  it('Number & null:[23,44,7,10,0],Null => []', () => {
    expect(intersection([23,44,7,10,0],null)).toEqual([]);
  });
  it('undefined & null:undefined, Null => []', () => {
    expect(intersection([23,44,7,10,0],null)).toEqual([]);
  });
  it('Number & null:[23,44,7,10,0],[] => []', () => {
    expect(intersection([23,44,7,10,0],[])).toEqual([]);
  });
});