# Split Object: Using Object.entries() Method

Take an object and split it into an array of objects. Each entry in the array will be one key/value pair from the object.

<!-- BEGIN DOCS -->

<!-- END DOCS -->

---

## Strategy

At first glance it seems logical to just use the `.Split()` Method, but the challenge is specific with the result. So in this case it is going to be more useful to implement the built-in method for _Objects_.

---

## Implementation

This challenge was well documented and very specific, and already specify not to worry with side effects, so i basically start figuring out directly in the sandbox.

From [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries):

> The `Object.entries()` method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well.

---

## Use Cases

A quick searching in google brings me this idea:

Using it for knowing the number of connected users:

```js
const users = {
  { name: 'Kratos'
  connected: true },
  { name: 'Odin'
  connected: false }
};
const splitUsers = Object.entries(users)
const connectedUsers = splitUsers.map(item => item[0]);

```

In the video of reference there is a mention of working with JSON packages in which you have to import or extract data from Objects.

1. Maybe a most common use case could be to access data like scores from a particular mission in a video game.
2. Access data like ingredients and quantities for a recipe.

---

## Inspiration

This video was really useful for understanding the built-in method and possible **Use Cases**
[Link to the video](https://www.youtube.com/watch?v=A0g7sga28Zg)

<!--
  was there any code, blog post, video, ... that inspired your solution?
  there's nothing wrong with adapting other people's code, just give them credit!
  and say how it inspired your solution.
-->
