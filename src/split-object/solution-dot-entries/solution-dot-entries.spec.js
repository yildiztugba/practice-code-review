import { objectSplitter } from './solution-dot-entries.js';

describe('objectSplitter separates an object into an array of objects', () => {
  describe('split an object with strings', () => {
    it('strings with upper and lower case mix', () => {
      const expected = [[ "a", "Du" ], [ "b", "Du Hast" ], [ "c", "Du Hast Mich" ]];
      const received = objectSplitter({ a: 'Du', b: 'Du Hast', c: 'Du Hast Mich' });
      expect(received).toEqual(expected);
    });
    it('all upper case', () => {
      const expected = [[ "a", "DU" ], [ "b", "DU HAST" ], [ "c", "DU HAST MICH" ]];
      const received = objectSplitter({ a: 'DU', b: 'DU HAST', c: 'DU HAST MICH' });
      expect(received).toEqual(expected);
    });
    it('all lower case', () => {
      const expected = [[ "a", "du" ], [ "b", "du hast" ], [ "c", "du hast mich" ]];
      const received = objectSplitter({ a: 'du', b: 'du hast', c: 'du hast mich' });
      expect(received).toEqual(expected);
    });
    it('special characters', () => {
      const expected = [[ "a", "d#" ], [ "b", "du h@$t" ], [ "c", "du hast m%(h" ]];
      const received = objectSplitter({ a: 'd#', b: 'du h@$t', c: 'du hast m%(h' });
      expect(received).toEqual(expected);
    });
  });
  describe('split an object with numbers', () => {
    it('whole numbers', () => {
      const expected = [[ "a", 1 ], [ "b", 2 ], [ "c", 3 ]];
      const received = objectSplitter({ a: 1, b: 2, c: 3 });
      expect(received).toEqual(expected);
    });
    it('decimal numbers', () => {
      const expected = [[ "a", 1.5 ], [ "b", 2.8 ], [ "c", 3.1 ]];
      const received = objectSplitter({ a: 1.5, b: 2.8, c: 3.1 });
      expect(received).toEqual(expected);
    });
    it('mixed whole and decimal numbers', () => {
      const expected = [[ "a", 1.5 ], [ "b", 2 ], [ "c", 3.1 ]];
      const received = objectSplitter({ a: 1.5, b: 2, c: 3.1 });
      expect(received).toEqual(expected);
    });
    it('negative numbers', () => {
      const expected = [[ "a", 1.5 ], [ "b", -2 ], [ "c", -3.1 ]];
      const received = objectSplitter({ a: -1.5, b: -2, c: -3.1 });
      expect(received).toEqual(expected);
    });
  });
});