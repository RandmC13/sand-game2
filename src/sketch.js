//Imports
import p5 from "p5";

import Screen from "./screen";
import Sand from "./sand";

const sketch = (p) => {
	//Defining variables
	let screen;

	const particleSize = 8;

	//Function runs once on page load

	p.setup = () => {
		//Set no stroke
		p.noStroke();
		//Define screen object
		screen = new Screen(p.windowWidth, p.windowHeight, particleSize, p);
		
		//generate random sand particles
		for (var i=0;i<30;i++) {
			let x = Math.floor(Math.random() * screen.gridWidth);
			let y = Math.floor(Math.random() * screen.gridHeight);
			screen.grid[x][y] = new Sand();
		}

		p.createCanvas(screen.width, screen.height);
	};

	//Game loop

	p.draw = () => {
		//Draw particles on screen
		screen.stepSim();
		//Every 2 frames, add sand in the middle of the screen
		if (screen.framenum % 2 == 0) {
			screen.grid[Math.floor(screen.gridWidth / 2)][5] = new Sand();
		}
	};
};

new p5(sketch, document.body);