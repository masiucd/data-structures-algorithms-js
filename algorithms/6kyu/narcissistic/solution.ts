export function narcissistic(value: number): boolean {
	let valueStr = value.toString();
	return valueStr.split("")
		.map(Number)
		.map((n) => Math.pow(n, valueStr.length))
		.reduce((a, b) => a + b, 0) === value;
}
