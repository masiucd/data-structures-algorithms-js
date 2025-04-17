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
}

export class List implements ListInterface {
	#head: Node | null;
	#length: number;
	constructor() {
		this.#head = null;
		this.#length = 0;
	}

	add(value: number): void {
		let newNode = new Node(value);
		if (this.#head === null) {
			this.#head = newNode;
		} else {
			let current = this.#head;
			while (current.next !== null) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.#length += 1;
	}
	prepend(value: number): void {
		let newNode = new Node(value);
		if (this.#head === null) {
			this.#head = newNode;
		} else {
			let current = this.#head;
			newNode.next = current;
			this.#head = newNode;
		}
		this.#length += 1;
	}
	remove(value: number): void {
		// TODO
	}
	find(value: number): Node | null {
		let current = this.#head;
		while (current !== null) {
			if (current.value === value) return current;
			current = current.next;
		}
		return current;
	}
	isEmpty(): boolean {
		return this.#head === null;
	}
	size(): number {
		return this.#length;
	}
	clear(): void {
		this.#head = null;
		this.#length = 0;
	}
	toArray(): number[] {
		let result = [];
		let current = this.#head;
		while (current !== null) {
			result.push(current.value);
			current = current.next;
		}
		return result;
	}
	toString(): string {
		let current = this.#head;
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

	// private methods!
}
