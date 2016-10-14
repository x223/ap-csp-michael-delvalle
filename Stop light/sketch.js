var fill1 = 'white';
var fill2 = 'white';
var fill3 = 'white';
var ellipse1;
var ellipse2;
var ellipse3;
function setup() { 
  createCanvas(windowWidth, windowHeight);
} 

function draw() { 
  background(mouseY * 0.35,mouseY * 0.35,mouseX * 0.35);
stroke(220,120,230);
	fill(fill1);
ellipse1 = ellipse(windowWidth / 2, windowHeight / 2 - 200, 200, 200);
fill(fill2);
	ellipse2 = ellipse(windowWidth / 2, windowHeight / 2 , 200, 200);
fill(fill3);
	ellipse3 = ellipse(windowWidth / 2, windowHeight / 2 + 200, 200, 200);

	if(mouseY >= windowWidth / 1.5){
	fill1 = "white";
		fill2 = 'white';
		fill3 = 'green';
	}
	else if (mouseY >= windowWidth/3){
	fill1 = "white";
		fill2 = 'yellow';
		fill3 = 'white';
	}
	else if (mouseY >= windowWidth/5){
	fill1 = "red";
		fill2 = 'white';
		fill3 = 'white';
	}
}