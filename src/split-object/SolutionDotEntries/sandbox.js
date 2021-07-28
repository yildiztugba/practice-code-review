import { solutionName } from "./solutionDotEntries";

/*
import { solutionName } from './solutionDotEntries.js';

export const solutionName = (solutionDotEntries = []) => {
    return solutionDotEntries.entries();
};
*/
let slipknot = {
Album1999: 'Slipknot',
Album2001: 'Iowa',
};

console.log(slipknot)

let arr = Object.entries(slipknot);

describe('Splitting an Object into Array', () => {
it('{Album2001:Iowa} => [Album,Iowa]',() => {
    expect(solutionName({Album2001})).toEqual([Album2001,'Iowa']);
});
});