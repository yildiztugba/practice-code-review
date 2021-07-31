# Intersection : strategy name

The function will return a new array of values that contains both two given arrays.

intersection([1, 2, 3, 4, 5],[1, 5]) -> [1, 5]

intersection([4, 5, 5, 6, 7],[2, 4, 5, 7]) -> [4, 5, 7]

## Syntax

> intersection(firstArray[], secondArray[]) -> []

### Parameters

**firstArray[]**: `array`

- array of values

**secondArray[]**: `array`

- array of values

### Return Value: `array`

- array of same values in both first and second array

---

## Test Cases

intersection(['john', 'jimmy', 'jack'], ['jimmy', 'jason']) ➞ ['jimmy'])

intersection([23, 44, 7, 10, 0], undefined) ➞ []

intersection([23, 44, 7, 10, 0], [null]) ➞ []

```js
describe('Basic Tests', () => {
  Test.assertEquals(intersection((['john', 'jimmy', 'jack'], ['jimmy', 'jason']), ['jimmy']);
  Test.assertEquals(intersection(([23, 44, 7, 10, 0], undefined), []);
  Test.assertEquals(intersection(([23, 44, 7, 10, 0], [null]), []);
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

- the function can be used in any program to find intersection of any two arrays.
---

## Inspiration

<!--
  was there any code, blog post, video, ... that inspired your solution?
  there's nothing wrong with adapting other people's code, just give them credit!
  and say how it inspired your solution.
-->
