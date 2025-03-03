// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/typescript
/**
 * Reverses or rotates chunks of a given string based on the sum of the digits in each chunk.
 *
 * @param s - The input string to be processed.
 * @param sz - The size of each chunk to be processed.
 * @returns A new string where each chunk of size `sz` is either reversed or rotated.
 *
 * If `sz` is less than or equal to 0, or if the input string is empty, or if `sz` is greater than the length of the input string, an empty string is returned.
 *
 * The function splits the input string into chunks of size `sz`. For each chunk:
 * - If the sum of the digits in the chunk is even, the chunk is reversed.
 * - If the sum of the digits in the chunk is odd, the chunk is rotated (the first character is moved to the end).
 *
 * Chunks that are not of size `sz` are discarded.
 */
export function revRot(s: string, sz: number): string {
	if (sz <= 0 || s === "" || sz > s.length) return "";
	return chunk(s, sz)
		.filter((n) => n.length === sz)
		.map((n) => {
			if (isEven(sum(n))) {
				return n.split("").reverse().join("");
			}
			return n.slice(1) + n[0];
		}).join("");
}

function chunk(s: string, size: number) {
	let chunked = [];
	for (let i = 0; i < s.length; i += size) {
		chunked.push(s.slice(i, i + size));
	}
	return chunked;
}

function sum(s: string): number {
	return s.split("").map(Number).reduce(
		(acc, curr) => acc + curr,
		0,
	);
}

function isEven(n: number): boolean {
	return n % 2 === 0;
}
