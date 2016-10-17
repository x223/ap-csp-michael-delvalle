var strokeColor = 'black';

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(220);
}

function keyTyped() {
	//white
	if (key === 'w') {
		strokeColor = '#E3709';
		strokeWeight(10);
	}
	//black
	else if (key === 'b') {
		strokeColor = 'black';
		strokeWeight(10);
	}
	//clear
	else if (key === 'c') {
		background(220);
		strokeColor = 'black';
		strokeWeight(10);
	}
	//eraser
	else if (key === 'e') {
		strokeColor = 220;
		strokeWeight(10);
	}
	//turqoiseish
	else if (key === 't') {
		strokeColor = '#4fdbcd';
		strokeWeight(10);
	}
	//yellow
	else if (key === 'y') {
		strokeColor = '#eafa82';
		strokeWeight(10);
		//burgundy
	} else if (key === 'r') {
		strokeColor = '#821c0d';
		strokeWeight(10);
	}
	// //straightline
	// else if(keyIsPressed);{
	// line(pmouseX,windowWidth/2,mouseX,windowWidth/2);
	// }
}

function draw() {
	strokeWeight(10);
	stroke(strokeColor);
	if (mouseIsPressed) {
		line(pmouseX, pmouseY, mouseX, mouseY);
	}
}