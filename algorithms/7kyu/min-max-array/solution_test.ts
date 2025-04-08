import { maxMinArrays } from "./solution.ts";

Deno.test("Max Min Arrays", () => {
	const testCases = [
		{ input: [1, 2, 3, 4, 5], expected: [5, 1, 4, 2, 3] },
		{ input: [1, 2, 3, 4], expected: [4, 1, 3, 2] },
		{ input: [1, 2, 3], expected: [3, 1, 2] },
	];

	testCases.forEach(({ input, expected }) => {
		const result = maxMinArrays(input);
		console.assert(
			result.toString() === expected.toString(),
			`Expected ${expected} but got ${result} for input ${input}`,
		);
	});
});
