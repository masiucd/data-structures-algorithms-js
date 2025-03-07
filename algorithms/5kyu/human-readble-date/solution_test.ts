import { assertEquals } from "@std/assert/equals";
import { humanReadable } from "./solution.ts";

Deno.test("humanReadable(0) ---> '00:00:00'", () => {
	assertEquals(humanReadable(0), "00:00:00");
});

Deno.test("humanReadable(5) ---> '00:00:05'", () => {
	assertEquals(humanReadable(5), "00:00:05");
});

Deno.test("humanReadable(60) ---> '00:01:00'", () => {
	assertEquals(humanReadable(60), "00:01:00");
});

Deno.test("humanReadable(86399) ---> '23:59:59'", () => {
	assertEquals(humanReadable(86399), "23:59:59");
});

Deno.test("humanReadable(359999) ---> '99:59:59'", () => {
	assertEquals(humanReadable(359999), "99:59:59");
});
