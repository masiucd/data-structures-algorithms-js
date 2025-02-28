import { assertEquals } from "@std/assert/equals";
import { fixStringCase } from "./solution.ts";

Deno.test('fixStringCase("CODe")', () => {
	assertEquals(fixStringCase("CODe"), "CODE");
});

Deno.test('fixStringCase("COde")', () => {
	assertEquals(fixStringCase("COde"), "code");
});

Deno.test('fixStringCase("Code")', () => {
	assertEquals(fixStringCase("Code"), "code");
});

Deno.test('fixStringCase("code")', () => {
	assertEquals(fixStringCase("code"), "code");
});
