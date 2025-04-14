import { findUniq } from "./solution.ts";

Deno.test("findUniq", () => {
	// Test cases
	const testCases = [
		{ input: [1, 1, 1, 2, 1, 1], expected: 2 },
		{ input: [0, 0, 0.55, 0, 0], expected: 0.55 },
		{ input: [1, 1, 1, 1, 2], expected: 2 },
		{ input: [2, 2, 3, 2], expected: 3 },
		{ input: [1, 2, 2, 2], expected: 1 },
		{ input: [2, 3, 3, 3], expected: 2 },
	];
	// Loop through each test case
	for (const { input, expected } of testCases) {
		// Call the function with the input
		const result = findUniq(input);
		// Check if the result matches the expected output
		if (expected === undefined) {
			console.assert(
				result === undefined,
				`Expected undefined but got ${result}`,
			);
		} else {
			console.assert(
				result === expected,
				`Expected ${expected} but got ${result}`,
			);
		}
	}
});
