/**
 *this function changes the given array into  flatten array.
 *@param{Array} [array] The array to flatten
 @param {[]} [] empty array where all concatenated elements(sub-arrays) passed into.
 *@return{Array} Returns the new flattened array.
 */

export const flattenedArray = (array) => {
  return [].concat.apply([], array);
};
