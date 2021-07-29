/**
 *this function returns a new array  by flatting a given array.
 *@param{Array} [flattenArray] not flatten array.
 *@return{Array} flatten array
 */

export const solutionName = (flattenArray) => {
  return [].concat.apply([], flattenArray);
};
