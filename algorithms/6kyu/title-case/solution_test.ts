import { assertEquals } from "@std/assert";
import { titleCase } from "./solution.ts";

Deno.test('titleCase("a clash of KINGS", "a an the of")', () => {
	assertEquals(
		titleCase("a clash of KINGS", "a an the of"),
		"A Clash of Kings",
	);
});

Deno.test('titleCase("THE WIND IN THE WILLOWS", "The In")', () => {
	assertEquals(
		titleCase("THE WIND IN THE WILLOWS", "The In"),
		"The Wind in the Willows",
	);
});

Deno.test('titleCase("the quick brown fox")', () => {
	assertEquals(
		titleCase("the quick brown fox"),
		"The Quick Brown Fox",
	);
});
