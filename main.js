const fs = require("fs");
const { parse } = require("./parse-grid.js");
const { floodFill } = require("./flood-fill.js");

const main = () => {
	const source = fs.readFileSync(process.argv[2], "utf-8");
	const { grid, start } = parse(source);
	console.log(grid);
	const floodedPoints = floodFill(start, grid);
	console.log(floodedPoints);
	console.log(grid);
};

main();