# Narcissistic

## Description

A narcissistic number (or Armstrong number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
For example, take 153:

- 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

Write a function that takes an integer and returns true if it is a narcissistic number, and false if it is not.

## Examples

```ts
narcissistic(153); // true
narcissistic(1652); // false
```

## Constraints

- The number of digits in the number will be at least 1 and at most 10.
- The number will be a positive integer.
- The number will not be negative.
- The number will not be zero.
- The number will not be a decimal.
- The number will not be a string.
