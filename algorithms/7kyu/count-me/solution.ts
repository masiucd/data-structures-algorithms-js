export function countMe(data: string): string {
	if (!/^[0-9]+$/.test(data)) return ""; // Validate input
	let result = "";
	let count = 1;
	for (let i = 1; i < data.length; i++) {
		if (data[i] === data[i - 1]) {
			count++; // Increment count for consecutive digits
		} else {
			result += `${count}${data[i - 1]}`; // Append count and digit
			count = 1; // Reset count
		}
	}
	result += `${count}${data[data.length - 1]}`; // Append last group
	return result;
}
