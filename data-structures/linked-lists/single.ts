class Node {
	value: number;
	next: Node | null;
	constructor(value: number) {
		this.value = value;
		this.next = null;
	}
}

interface ListInterface {
	add(value: number): void;
	prepend(value: number): void;
	remove(value: number): void;
	find(value: number): Node | null;
	isEmpty(): boolean;
	size(): number;
	clear(): void;
	toArray(): number[];
	toString(): string;
	reverse(): void;
	sort(): void;
	print: () => void;
}

export class List implements ListInterface {
	private head: Node | null;
	private length: number;
	constructor() {
		this.head = null;

		this.length = 0;
	}
	add(value: number): void {
		let newNode = new Node(value);
		if (this.head === null) {
			// list is empty
			this.head = newNode;
		} else {
			let current = this.head;
			// let last = null;
			while (current.next !== null) {
				current = current.next;
			}
			console.log("current", current, newNode);
			current.next = newNode;
		}
		this.length += 1;
	}
	prepend(value: number): void {
		throw new Error("Method not implemented.");
	}
	remove(value: number): void {
		throw new Error("Method not implemented.");
	}
	find(value: number): Node | null {
		throw new Error("Method not implemented.");
	}
	isEmpty(): boolean {
		throw new Error("Method not implemented.");
	}
	size(): number {
		throw new Error("Method not implemented.");
	}
	clear(): void {
		throw new Error("Method not implemented.");
	}
	toArray(): number[] {
		throw new Error("Method not implemented.");
	}
	toString(): string {
		let current = this.head;
		if (current === null) return "List is empty";
		let res = [];
		while (current) {
			res.push(current.value);
			current = current.next;
		}
		return res.join(" -> ");
	}
	reverse(): void {
		throw new Error("Method not implemented.");
	}
	sort(): void {
		throw new Error("Method not implemented.");
	}
	print() {
		//
	}
}
