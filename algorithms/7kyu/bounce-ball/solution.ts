/**
 * Simulates the bouncing of a ball and calculates the number of times the ball will bounce.
 *
 * @param initial - The initial height from which the ball is dropped.
 * @param proportion - The proportion of the height to which the ball bounces back (must be between 0 and 1).
 * @returns The number of times the ball will bounce before it stops.
 */
export function bouncingBall(initial: number, proportion: number) {
	let height = initial;
	let bounces = 0;
	while (height > 1) {
		height *= proportion;
		bounces++;
	}
	return bounces;
}
