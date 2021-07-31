/** Flatting a nested array
 * @param {array} a nested array to be flat
 * @returns {array} a flatten array
 *
 */

export const solutionName = (nestedArray = []) => {
  return nestedArray.flat(Infinity);
};
