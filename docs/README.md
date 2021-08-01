<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TREE -->

> [interactive graph](./dependency-graph.html)

![dependency graph](./dependency-graph.svg)

<!-- END TREE -->

<!-- BEGIN TOC -->

- deep-flat
  - solution
    - [solution-name.js](#srcdeep-flatsolutionsolution-namejs)
- difference
  - solution
    - [solution-name.js](#srcdifferencesolutionsolution-namejs)
- intersection
- sort-numbers
  - example-built-in-sort
    - [sort-numbers.js](#srcsort-numbersexample-built-in-sortsort-numbersjs)
- split-object
  - solution-dot-entries
    - [Boludez.js](#srcsplit-objectsolution-dot-entriesBoludezjs)
    - [solution-dot-entries.js](#srcsplit-objectsolution-dot-entriessolution-dot-entriesjs)

---

<!-- END TOC -->

---

<!-- BEGIN DOCS -->

# /deep-flat

## /solution

<details><summary><a href="../../src/deep-flat/solution/solution-name.js" id="srcdeep-flatsolutionsolution-namejs">../src/deep-flat/solution/solution-name.js</a></summary>

<a name="solutionName"></a>

## solutionName ⇒ <code>array</code>

Flattening a nested array.

**Returns**: <code>array</code> - A flatten array.

| Param         | Type               | Default         | Description                   |
| ------------- | ------------------ | --------------- | ----------------------------- |
| [nestedArray] | <code>array</code> | <code>[]</code> | A nested array to be flatten. |

</details>

---

---

# /difference

## /solution

<details><summary><a href="../../src/difference/solution/solution-name.js" id="srcdifferencesolutionsolution-namejs">../src/difference/solution/solution-name.js</a></summary>

<a name="solutionName"></a>

## solutionName

</details>

---

---

# /intersection

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

## /solution-dot-entries

<details><summary><a href="../../src/split-object/solution-dot-entries/Boludez.js" id="srcsplit-objectsolution-dot-entriesBoludezjs">../src/split-object/solution-dot-entries/Boludez.js</a></summary>

</details>

<details><summary><a href="../../src/split-object/solution-dot-entries/solution-dot-entries.js" id="srcsplit-objectsolution-dot-entriessolution-dot-entriesjs">../src/split-object/solution-dot-entries/solution-dot-entries.js</a></summary>

<a name="objectSplitter"></a>

## objectSplitter ⇒ <code>Array</code>

Splitting an Object into and Array of Arrays.

Returns a new array with one array for each key/value pair from the original object.

**Returns**: <code>Array</code> - Array of arrays.

| Param     | Type                | Default         | Description                                                    |
| --------- | ------------------- | --------------- | -------------------------------------------------------------- |
| [toSplit] | <code>object</code> | <code>{}</code> | The Object which will be split into arrays of keys and values. |

**Example**

```js
objectSplitter({ a: "Du", b: "Du Hast", c: "Du Hast Mich" });
// -> [[ "a", "Du" ], [ "b", "Du Hast" ], [ "c", "Du Hast Mich" ]]
```

</details>

---

---

<!-- END DOCS -->
