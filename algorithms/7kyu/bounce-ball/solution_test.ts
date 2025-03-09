import { assertEquals } from "@std/assert/equals";
import { bouncingBall } from "./solution.ts";

Deno.test("bouncingBall(2.0, 0.5) ---> 1", () => {
	assertEquals(bouncingBall(2.0, 0.5), 1);
});

Deno.test("bouncingBall(100, 0.1) ---> 2", () => {
	assertEquals(bouncingBall(100, 0.1), 2);
});
