export function points(games: string[]): number {
	let totalScore = 0;
	for (let game of games) {
		let [x, y] = game.split(":");
		let x1 = parseInt(x, 10);
		let y1 = parseInt(y, 10);
		if (x1 > y1) {
			totalScore += 3;
		} else if (x1 === y1) {
			totalScore += 1;
		}
	}
	return totalScore;
}
