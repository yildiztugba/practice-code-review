/**
 * Flattening a nested array.
 *@param {array} [nestedArray = []] A nested array to be flatten.
 *@returns {array} A flatten array.
 */

export const solutionName = (nestedArray = []) => {
  return nestedArray.flat(Infinity);
};
