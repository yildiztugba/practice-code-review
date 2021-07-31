/**
 * The flattenArray function changes nested array into flatten array.
 *
 * @param {Array} [array] - The array to flatten.
 * @returns {Array} - Returns the new flattened array.
 */

export const flattenedArray = (array) => {
  return [].concat.apply([], array);
};
