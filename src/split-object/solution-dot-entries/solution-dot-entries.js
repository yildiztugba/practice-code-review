/**
 * Splitting an Object into and Array of Arrays.
 *
 * Returns a new array with one array for each key/value pair from the original object.
 *
 * @param {object} [toSplit={}] The Object which will be split into arrays of keys and values.
 * @returns {Array} Array of arrays.
 * @example
 *
 * objectSplitter({ a: 'Du', b: 'Du Hast', c: 'Du Hast Mich' });
 * // -> [[ "a", "Du" ], [ "b", "Du Hast" ], [ "c", "Du Hast Mich" ]]
 */
export const objectSplitter = (toSplit = []) => {
  // splitting the object into arrays with Object.entries
  const splitObject = Object.entries(toSplit);
  // return split the object into arrays of keys and values
  return splitObject;
};
