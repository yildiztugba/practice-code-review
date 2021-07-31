/**
 * The function will return a new array of values that contains both two given arrays.
 *
 * @param {Array[]} [firstArray = []] - This is the first array.
 * @param {Array[]} [secondArray = []] - This is the second array.
 * @returns {Array[]} Values that contains in both firstArray and secondArray.
 * @example
 *
 * intersection([2, 1], [2, 3]);
 * // -> [2]
 *
 * @example
 *
 * intersection([2, 1, 2], [2, 3]);
 * // -> [2]
 */

export const intersection = (firstArray = [], secondArray = []) => {
  const newArray = [];

  firstArray.forEach((value) => {
    if (secondArray.includes(value) && !newArray.includes(value))
      newArray.push(value);
  });

  return newArray;
};
