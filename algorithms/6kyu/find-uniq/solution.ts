export function findUniq(arr: number[]): number {
	let store = new Map();
	for (let n of arr) {
		if (!store.has(n)) {
			store.set(n, 1);
		} else {
			store.set(n, store.get(n) + 1);
		}
	}

	for (let [k, v] of store.entries()) {
		if (v === 1) {
			return k;
		}
	}
	return arr[0];
}
