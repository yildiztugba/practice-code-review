<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TREE -->

> [interactive graph](./dependency-graph.html)

![dependency graph](./dependency-graph.svg)

<!-- END TREE -->

<!-- BEGIN TOC -->

- deep-flat
- difference
- intersection
  - Intersection-Solution-tugba
    - [intersection.js](#srcintersectionIntersection-Solution-tugbaintersectionjs)
- sort-numbers
  - example-built-in-sort
    - [sort-numbers.js](#srcsort-numbersexample-built-in-sortsort-numbersjs)
- split-object

---

<!-- END TOC -->

---

<!-- BEGIN DOCS -->

# /deep-flat

---

# /difference

---

# /intersection

## /Intersection-Solution-tugba

<details><summary><a href="../../src/intersection/Intersection-Solution-tugba/intersection.js" id="srcintersectionIntersection-Solution-tugbaintersectionjs">../src/intersection/Intersection-Solution-tugba/intersection.js</a></summary>

<a name="intersection"></a>

## intersection ⇒ <code>Array.&lt;Array&gt;</code>

The function will return a new array of values that contains both two given arrays.

**Returns**: <code>Array.&lt;Array&gt;</code> - Values that contains in both firstArray and secondArray.

- @example

intersection([2, 1], [2, 3]);
// -> [2]

| Param         | Type                             | Default         | Description               |
| ------------- | -------------------------------- | --------------- | ------------------------- |
| [firstArray]  | <code>Array.&lt;Array&gt;</code> | <code>[]</code> | This is the first array.  |
| [secondArray] | <code>Array.&lt;Array&gt;</code> | <code>[]</code> | This is the second array. |

**Example**

```js
intersection([2, 1, 2], [2, 3]);
// -> [2]
```

</details>

---

---

# /sort-numbers

## /example-built-in-sort

<details><summary><a href="../../src/sort-numbers/example-built-in-sort/sort-numbers.js" id="srcsort-numbersexample-built-in-sortsort-numbersjs">../src/sort-numbers/example-built-in-sort/sort-numbers.js</a></summary>

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

</details>

---

---

# /split-object

---

<!-- END DOCS -->
