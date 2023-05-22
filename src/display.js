const green = "\033[48;5;34m  \033[0m";
const blue = "\033[44m  \033[0m";
const red = "\033[41m  \033[0m";
const soil = "\033[48;5;94m  \033[0m";
const empty = "  ";

const colors = [green, soil, empty, blue];

function isFramesCompleted(floodedPoints, index) {
	return index === floodedPoints.length;
}

const visualizeFlood = (frame, floodedPoints) => {
	let index = 0;

	const intervalId = setInterval(() => {
		console.clear();
		const [y, x] = floodedPoints[index++];
		frame[y][x] = colors[3];
		renderFrame(frame);
		if (isFramesCompleted(floodedPoints, index)) clearInterval(intervalId);
	}, 500);
};

const render = (grid) => {
	const frame = new Array(grid.length)
		.fill(0)
		.map(() => new Array(grid[0].length));

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			frame[i][j] = colors[grid[i][j]];
		}
	}
	return frame;
};

const renderFrame = (frame) => {
	console.log(frame.map((element) => element.join("")).join("\n"));
};

exports.render = render;
exports.visualizeFlood = visualizeFlood;
