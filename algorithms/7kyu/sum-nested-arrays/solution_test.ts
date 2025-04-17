import { assertEquals } from "@std/assert/equals";
import { sumNested } from "./solution.ts";

Deno.test("sumNested", () => {
	assertEquals(sumNested([1, [2], [3, [4, 5]], 6, [7, [8, 9]]]), 45);
	assertEquals(sumNested([]), 0);
	assertEquals(sumNested([1]), 1);
	assertEquals(sumNested([1, 2]), 3);
	assertEquals(sumNested([1, [2], 3]), 6);
	assertEquals(sumNested([[1], [2], [3]]), 6);
	assertEquals(sumNested([[1], [[2]], [[[[3]]]]]), 6);
});
