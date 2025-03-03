import { assertEquals } from "@std/assert";
import { revRot } from "./solution.ts";

Deno.test("123456987654 6 ---> 234561876549", () => {
	assertEquals(revRot("123456987654", 6), "234561876549");
});

Deno.test("563000655734469485 4 ---> 0365065073456944", () => {
	assertEquals(revRot("563000655734469485", 4), "0365065073456944");
});

Deno.test("66443875 4 ---> 44668753", () => {
	assertEquals(revRot("66443875", 4), "44668753");
});

Deno.test("66443875 8 ---> 64438756", () => {
	assertEquals(revRot("66443875", 8), "64438756");
});

Deno.test("'' 8 ---> ''", () => {
	assertEquals(revRot("", 8), "");
});
