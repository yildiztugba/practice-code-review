# Intersection : strategy name

 The function write a new array of values that contains two arrays.

arrayOfSameValues([1, 2, 3, 4, 5],[1, 5]) -> [1, 5]

arrayOfSameValues([4, 5, 5, 6, 7],[2, 4, 5, 7]) -> [4, 5, 7]

## Syntax

> arrayOfSameValues(firstArray[], secondArray[]) -> []

### Parameters

**firstArray[]**: `array`

- array of values
  
**secondArray[]**: `array`

- array of values

### Return Value: `array`

- array of same values in both first and second array

---

## Test Cases

minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]

```js
describe('Basic Tests', () => {
  Test.assertEquals(minMax([1, 2, 3, 4, 5])), [1, 5]);
  Test.assertEquals(minMax([2334454, 5]), [5, 2334454]);
  Test.assertEquals(minMax([1], [1, 1]);
});
```

## Strategy

- create new array for keeping same values for in both first and second array
- take each value of first array for comparison.
- check if second array includes values of first array and if new array doesn't have values
- if condition is right, keep values in new array

---

## Implementation

- use for-each method for taking each value of first array.
- check same values in both first and second array with if condition and using include method
- check if there is a possibility for a repeated value with include method.
- if condition is true, push values to new array.

---

## Use Cases

---

## Inspiration

<!--
  was there any code, blog post, video, ... that inspired your solution?
  there's nothing wrong with adapting other people's code, just give them credit!
  and say how it inspired your solution.
-->
