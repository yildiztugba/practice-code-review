/**
 * Compares the items in the firstArray against the the secondArray and returns the values which are in the firstArray but not in the secondArray.
 
 * @param {Array[]} [firstArray=[]] - The first array of items to be compared.
 * @param {Array[]} [secondArray=[]] - The second array of items to be compared.
 * @returns {Array[]} [newArray=[]] - The new array that embraces items(difference) which are found in
 * the first array but not in the second to be compared.
 
 * @example
 *  arrayDifference([1,2,3,4][1,3,4,5]); // [2]
 */

export const arrayDifference = (firstArray = [], secondArray = []) => {
  // Create a new array that will contain only the difference(items which are in the firstArray but not in the second)
  const newArray = [];
  // iterating each of the items in the first array using forEach method(this builtin method can also be replaced by for of loop)
  firstArray.forEach((item) => {
    // checking if the secondArray dose not include each of the iterated item.
    if (!secondArray.includes(item)) {
      // pushing items to the newArray which are included in the firstArray but not in the secondArray
      newArray.push(item);
    }
  });
  // returning the newArray(final result- difference)
  return newArray;
};
