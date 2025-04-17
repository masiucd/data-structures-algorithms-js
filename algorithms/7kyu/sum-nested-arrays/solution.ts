export function sumNested(arr: (number | (number | any[])[])[]): number {
	// pseudo code
	// 1.base case: if arr is empty return 0
	// 2. if arr is a number return arr
	// 3. if arr is an array, iterate through the array and call sumNested on each element
	// 4. return the sum of all the elements
	if (arr.length === 0) return 0;
	if (typeof arr[0] === "number") {
		// add the first element to the sum of the rest of the array
		return arr[0] + sumNested(arr.slice(1));
	} else if (Array.isArray(arr[0])) {
		// call sumNested on the first element and add it to the sum of the rest of the array
		return sumNested(arr[0]) + sumNested(arr.slice(1));
	}
	// if the first element is not a number or an array, return 0
	return sumNested(arr.slice(1));
}
