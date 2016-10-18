	var strokeColor = 'black';
	var strokewght = 11;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(220);
}

function keyTyped() {
	
	//white
	if (key === 'w') {
		strokeColor = '#E3709';
	}
		//strokeweight up
	else if (key === 's'){
	  strokewght = strokewght + 5;
	}
// 	strokeweight down
	else if (key === 'a'){
	  strokewght = strokewght - 5;
	}
	//black
	else if (key === 'b') {
		strokeColor = 'black';
	}
	//clear
	else if (key === 'c') {
		background(220);
		strokeColor = 'black';
	}
	//eraser
	else if (key === 'e') {
		strokeColor = 220;
	}
	//turqoiseish
	else if (key === 't') {
		strokeColor = '#4fdbcd';
	}
	//yellow
	else if (key === 'y') {
		strokeColor = '#eafa82';
		//burgundy
	} else if (key === 'r') {
		strokeColor = '#821c0d';
	}
	// //straightline
	// else if(keyIsPressed);{
	// line(pmouseX,windowWidth/2,mouseX,windowWidth/2);
	// }
}

function draw() {
	strokeWeight(strokewght);
	stroke(strokeColor);
	if (mouseIsPressed) {
		line(pmouseX, pmouseY, mouseX, mouseY);
	}
}

	
