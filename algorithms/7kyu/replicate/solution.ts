/**
 * Recursively creates an array containing a specified number repeated a given number of times.
 *
 * @param times - The number of times the `number` should be repeated. If `times` is 0 or less, an empty array is returned.
 * @param number - The number to be repeated in the resulting array.
 * @returns An array containing the `number` repeated `times` times.
 *
 * @example
 * ```typescript
 * replicate(3, 5); // [5, 5, 5]
 * replicate(0, 10); // []
 * replicate(-1, 7); // []
 * ```
 */
export function replicate(times: number, number: number): number[] {
	// base case - when times is 0, return an empty array
	if (times <= 0) return [];
	// recursive case - prepend the number to the result of the recursive call
	return [number, ...replicate(times - 1, number)];
}
