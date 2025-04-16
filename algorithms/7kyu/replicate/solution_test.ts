import { assertEquals } from "@std/assert/equals";
import { replicate } from "./solution.ts";

Deno.test("replicate", () => {
	assertEquals(replicate(3, 5), [5, 5, 5]);
	assertEquals(replicate(0, 10), []);
	assertEquals(replicate(-1, 7), []);
	assertEquals(replicate(2, 4), [4, 4]);
	assertEquals(replicate(1, 9), [9]);
});
