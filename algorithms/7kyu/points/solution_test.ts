import { points } from "./solution.ts";

Deno.test("Points Calculation", () => {
	const testCases = [
		{
			input: [
				"1:0",
				"2:0",
				"3:0",
				"4:0",
				"2:1",
				"3:1",
				"4:1",
				"3:2",
				"4:2",
				"4:3",
			],
			expected: 30,
		},
		{
			input: [
				"1:1",
				"2:2",
				"3:3",
				"4:4",
				"2:2",
				"3:3",
				"4:4",
				"3:3",
				"4:4",
				"4:4",
			],
			expected: 10,
		},
		{
			input: [
				"0:1",
				"0:2",
				"0:3",
				"0:4",
				"1:2",
				"1:3",
				"1:4",
				"2:3",
				"2:4",
				"3:4",
			],
			expected: 0,
		},
	];

	testCases.forEach(({ input, expected }) => {
		const result = points(input);
		console.assert(
			result === expected,
			`Expected ${expected} but got ${result} for input ${input}`,
		);
	});
});
