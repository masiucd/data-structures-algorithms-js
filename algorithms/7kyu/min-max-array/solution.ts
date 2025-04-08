export function maxMinArrays(xs: number[]) {
	let result = [];
	let size = xs.length;
	for (let i = 0; i < size; i++) {
		if (i % 2 === 0) {
			let max = Math.max(...xs);
			result[i] = max;
			xs = xs.filter((n) => n !== max);
		} else {
			let min = Math.min(...xs);
			result[i] = min;
			xs = xs.filter((n) => n !== min);
		}
	}
	return result;
}
