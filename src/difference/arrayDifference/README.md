# Difference: forEach

---
The function `arrayDifference` Compares items in the firstArray against the secondArray and returns the values which are in the firstArray but not in the secondArray.

## Strategy

---
In order to achieve the intended objective of my function `arrayDifference` i used the following strategy.
First of all iterating each items of the firstArray in order to check their value against the items included in the second array.
Besides,i check if they have been included in the second array or not.
If the given item is included in the secondArray then we just skip to the next item to be checked.
However, if the item is `not included` in the secondArray then we keep it for further use.
and finally return those items that we have been storing for further use(items which are included in the firstArray but not in the second.)

## Implementation

---
**forEach method:** I used the forEach method to iterate each and avery item of the array.

**.includes():** I checked if the secondArray includes every iterated item in the firstArray. In this case i used the `not operator "!"` to check that the item is not included in the second array.

**array.push():** I created a newArray that contains only the difference(items which are in the firstArray but not in the second)using the `array.push()` method.

Finally, i return the newArray using explicit return.

## Use Cases

---
This function could be helpful in checking if a new software upgrade includes all the previous packages.
It returns back only the package that is excluded in the latest update.

## Inspiration

The forEach solution that Samir had demonstrated us in class has inspired me to write this function.
<!--
  was there any code, blog post, video, ... that inspired your solution?
  there's nothing wrong with adapting other people's code, just give them credit!
  and say how it inspired your solution.
-->
