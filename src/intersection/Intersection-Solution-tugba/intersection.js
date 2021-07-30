/**
 * The function will return a new array of values that contains both two given arrays.
 * @param {array} [firstArray = []] .
 * @param {array} [secondArray= []] .
 * @returns {array} values that contains  firstArray and secondArray. 
 */
export const intersection = ( firstArray = [], secondArray = []) => {

    const newArray = [];

    firstArray.forEach(value => {

        if(secondArray.includes(value) & !newArray.includes(value))
            newArray.push(value);

    });

return newArray;

};
