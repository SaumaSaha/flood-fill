const green = "\033[42m  \033[0m";
const blue = "\033[44m  \033[0m";
const red = "\033[41m  \033[0m";
const empty = "  ";

const colors = [green, red, empty, blue];

const visualizeFlood = (frame, floodedPoints) => {
	let index = 0;

	const intervalId = setInterval(() => {
		console.clear();
		const [y, x] = floodedPoints[index++];
		frame[y][x] = colors[3];
		console.log(frame.map((element) => element.join("")).join("\n"));
		if (index === floodedPoints.length) clearInterval(intervalId);
	}, 500);
};

const render = (grid, floodedPoints) => {
	const frame = new Array(grid.length)
		.fill(0)
		.map(() => new Array(grid[0].length));

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			frame[i][j] = colors[grid[i][j]];
		}
	}
	visualizeFlood(frame, floodedPoints);
};

exports.render = render;
