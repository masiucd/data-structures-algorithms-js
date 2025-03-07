const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;
export function humanReadable(seconds: number): string {
	let hours = Math.floor(seconds / SECONDS_IN_HOUR);
	let minutes = Math.floor((seconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
	let remainingSeconds = seconds % SECONDS_IN_MINUTE;
	return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
}

function pad(num: number): string {
	return num
		.toString()
		.padStart(2, "0");
}
