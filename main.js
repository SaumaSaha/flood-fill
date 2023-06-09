const fs = require("fs");
const { parse } = require("./src/parse-grid.js");
const { floodFill } = require("./src/flood-fill.js");
const { render, visualizeFlood } = require("./src/display.js");

const main = () => {
	const source = fs.readFileSync(process.argv[2], "utf-8");
	const { grid, start } = parse(source);
	const floodedPoints = floodFill(start, grid);
	const initialFrame = render(grid);
	visualizeFlood(initialFrame, floodedPoints.sort());
};

main();
