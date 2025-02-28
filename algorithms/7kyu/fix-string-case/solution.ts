/**
 * Adjusts the case of the input string based on the count of lowercase and uppercase characters.
 * If the number of lowercase characters is greater than or equal to the number of uppercase characters,
 * the entire string is converted to lowercase. Otherwise, it is converted to uppercase.
 *
 * @param input - The string to be adjusted.
 * @returns The adjusted string with either all lowercase or all uppercase characters.
 */
export function fixStringCase(input: string) {
	let lower = 0;
	let upper = 0;
	for (let char of input) {
		if (char === char.toLowerCase()) {
			lower++;
		} else {
			upper++;
		}
	}

	if (lower >= upper) {
		return input.toLowerCase();
	}
	return input.toUpperCase();
}
