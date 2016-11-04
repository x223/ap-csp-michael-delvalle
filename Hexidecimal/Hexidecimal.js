function setup() {
	createCanvas(windowWidth, windowHeight);
// 	Create an input box
	input = createInput();
// 	Place the input box
	input.position(60, 5);
}

function draw() {
// 	create a background and font...
	background('white');
	textFont('courier');
// 	Label my input box
	text('Number:', 10, 20);
// 	Make a variable to hold the value of the input box
	var number = int(input.value());
	var number2 = int(input.value());
// 	Convert that number into binary
	var num = number.toString(2);
// Convert that number into hexidecimal
var num2 = number2.toString(16);
// 	Label my output
	text('In binary, ' + number + ' is', 0, 50);
// 	Display the binary number.
	text(num, 0, 80);
// 	Label my output
	text('In binary, ' + number2 + ' is', 0, 50);
// 	Display the binary number.
	text(num2, 0, 100);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}