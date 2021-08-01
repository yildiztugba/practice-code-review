import { objectSplitter } from './solution-dot-entries.js';

const slipknot = {
  Album1999: 'Slipknot',
  Album2001: 'Iowa',
};

// Tested and success in Study Lenses
console.log(objectSplitter(slipknot));

const objStrings1 = {
  a: 'Du',
  b: 'Du Hast',
  c: 'Du Hast Mich',
};
// Tested and success in Study Lenses
console.log(objectSplitter(objStrings1));
