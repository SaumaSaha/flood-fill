const floodFill = ([y, x], grid) => {
	if (grid[y][x] === 1 || grid[y][x] === 2) return [];

	grid[y][x] = 2;

	const a = floodFill([y + 1, x], grid);
	const b = floodFill([y - 1, x], grid);
	const c = floodFill([y, x + 1], grid);
	const d = floodFill([y, x - 1], grid);

	return [...a, ...b, ...c, ...d, [y, x]];
};

exports.floodFill = floodFill;
