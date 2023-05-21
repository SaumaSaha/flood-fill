const makeGrid = ([y, x]) => {
	return new Array(y + 1).fill(0).map(() => new Array(x + 1).fill(0));
};

const plotPoints = (grid, boundary) => {
	boundary.forEach(([y, x]) => {
		grid[y][x] = 1;
	});
};

const parse = (rawMap) => {
	const dataToPlot = JSON.parse(rawMap);
	const boundary = dataToPlot.slice(1);
	const start = dataToPlot[0];
	const gridSize = boundary.reduce(
		([maxY, maxX], [y, x]) => {
			return [Math.max(maxY, y), Math.max(maxX, x)];
		},
		[0, 0]
	);

	const grid = makeGrid(gridSize);
	plotPoints(grid, boundary);
	return { grid, start };
};

exports.parse = parse;
