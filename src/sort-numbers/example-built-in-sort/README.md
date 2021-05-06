# Sort Numbers: use a built-in array method

<!-- BEGIN DOCS -->

<a name="sortNumbers"></a>

## sortNumbers ⇒ <code>Array.&lt;number&gt;</code>

Sorts an array of numbers from smallest to largest.

Returns a new array without modifying the original array.

Does not need to support: NaN, Infinity, -Infinity.

**Returns**: <code>Array.&lt;number&gt;</code> - A new array with the same numbers, but sorted.

| Param          | Type                              | Default         | Description                   |
| -------------- | --------------------------------- | --------------- | ----------------------------- |
| [arrOfNumbers] | <code>Array.&lt;number&gt;</code> | <code>[]</code> | The array of numbers to sort. |

**Example**

```js
sortNumbers([1.5, 1, -1.5, 0, -1]);
// -> [-1.5, -1, 0, 1, 1.5]
```

**Example**

```js
sortNumbers([-1, 0, 1]);
// -> [-1, 0, 1]
```

> Docs generated: Wed May 05 2021, 9:43:33 AM

<!-- END DOCS -->

---

## Strategy

I chose to used built-in array methods to solve this challenge because they're fun to use and nice to read.

---

## Implementation

There were a few tricky things I had to figure out:

- the `.sort` method modifies the array that is being sorted. To avoid side-effects I needed to create a copy and sort the copy. ([MDN - _in place_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort))
- using `.sort` without a callback actually sorts alphabetically - helpful for strings but not for numbers. I needed to write a callback that finds the difference between two numbers, it took me a while to understand this. ([raddevon](https://raddevon.com/articles/sort-array-numbers-javascript/))

I write my callback directly inside `.sort( ... )` with an arrow function and implicit return. I like this because it's more readable.

---

## Use Cases

You could use this array to sort items in a shopping application from least to most expensive:

```js
const allProducts = [
  { name: "teddy bear", price: 3 },
  { name: "milk", price: 1 },
  { name: "light bulb", price: 2 },
];
const prices = allProducts.map((product) => product.price);
const sortedPrices = sortNumbers(prices);
const priceStrings = sortedPrices.map((price) => `${price}.0 €`);
console.log(priceStrings); // ['1.0 €', '2.0 €', '3.0 €']
```

---

## Inspiration

[This article from raddevon.com](https://raddevon.com/articles/sort-array-numbers-javascript/) gave me the starter code for my solution - especially the callback for `.sort`. But I needed to adapt that code to avoid side-effects and to make a complete function.
