import { assertEquals, assertExists } from "@std/assert";
import { List } from "./single.ts";

function init() {
	let l = new List();
	l.add(1);
	l.add(2);
	l.add(3);
	l.add(4);
	l.add(5);
	return l;
}

Deno.test("Add function, adds a new node on to the tail", () => {
	let l = init();
	assertEquals(l.size(), 5);
	l.add(10);
	assertEquals(l.size(), 6);
	let node = l.find(10);
	assertExists(node);
	assertEquals(node.next, null);
});
