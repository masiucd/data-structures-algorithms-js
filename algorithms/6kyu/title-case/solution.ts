export function titleCase(title: string, minorWords: string = ""): string {
	title = title.toLowerCase();
	const minWordsList = minorWords.toLowerCase().split(" ");
	const words = title.split(" ").map((word, index) => {
		if (index === 0 || !minWordsList.includes(word)) {
			return capitalizeWord(word);
		}
		return word;
	});
	return words.join(" ");
}

function capitalizeWord(word: string): string {
	const firstLetter = word[0].toUpperCase();
	return `${firstLetter}${word.slice(1)}`;
}
