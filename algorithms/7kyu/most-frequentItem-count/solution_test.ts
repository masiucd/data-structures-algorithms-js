import { assertEquals } from "@std/assert/equals";
import { mostFrequentItemCount } from "./solution.ts";

Deno.test("mostFrequentItemCount", () => {
	assertEquals(
		mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]),
		5,
	);
	assertEquals(mostFrequentItemCount([1]), 1);
	assertEquals(mostFrequentItemCount([]), 0);
	assertEquals(mostFrequentItemCount([1, 2]), 1);
	assertEquals(mostFrequentItemCount([1, 2, 2]), 2);
	assertEquals(mostFrequentItemCount([1, 2, 2, 3]), 2);
});
