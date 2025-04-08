# Min max array

## Description

In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

## Examples

```ts
minMaxArray([1, 2, 3, 4, 5]); // [5, 1, 4, 2, 3]
minMaxArray([1, 2, 3, 4]); // [4, 1, 3, 2]
minMaxArray([1, 2, 3]); // [3, 1, 2]
```

## Constraints

- The array will have at least 2 elements and at most 1000 elements.
- The array will have unique elements.
- The array will not be empty.
- The array will not contain negative numbers.
