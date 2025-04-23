import { assertEquals } from "@std/assert/equals";
import { countMe } from "./solution.ts";

Deno.test("countMe", () => {
	assertEquals(countMe("1123"), "211213");
	assertEquals(countMe("1"), "11");
	assertEquals(countMe("11"), "21");
	assertEquals(countMe("a"), "");
	assertEquals(countMe("a123"), "");
	assertEquals(countMe("21"), "1211");
	assertEquals(countMe("1211"), "111221");
	assertEquals(countMe("12322212223443"), "111213321132132413");
	assertEquals(countMe(""), "");
	assertEquals(countMe("123a"), "");
});
