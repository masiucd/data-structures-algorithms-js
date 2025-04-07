import { narcissistic } from "./solution.ts";

Deno.test("Narcissistic Numbers", () => {
	const testCases = [
		{ input: 153, expected: true },
		{ input: 370, expected: true },
		{ input: 371, expected: true },
		{ input: 9474, expected: true },
		{ input: 9475, expected: false },
		{ input: 123, expected: false },
		{ input: 0, expected: true },
		{ input: -1, expected: false },
	];

	testCases.forEach(({ input, expected }) => {
		const result = narcissistic(input);
		console.assert(
			result === expected,
			`Expected ${expected} but got ${result} for input ${input}`,
		);
	});
});
