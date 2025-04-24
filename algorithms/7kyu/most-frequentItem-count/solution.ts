export function mostFrequentItemCount(collection: number[]) {
	if (collection.length === 0) return 0;
	let store = collection.reduce((acc: Record<number, number>, n) => {
		if (!acc[n]) {
			acc[n] = 1;
		} else {
			acc[n]++;
		}
		return acc;
	}, {});
	return Math.max(...Object.values(store));
}
