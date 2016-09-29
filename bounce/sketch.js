var x = 1;
var y = 1;
var xposition = 1;
var yposition = 1;

function setup() { 
  createCanvas(windowWidth, windowHeight);
} 

function draw() { 
  x = x + 1 * xposition;
	y = y + random(10) * yposition;
	
	background(220);
line(windowWidth/2, 0, windowWidth/2, windowHeight);
	ellipse(x,y,100,100);
if (mouseX > windowWidth/2){
fill(12,250,240);
}	
	else {
	fill(198,55,250);
	}

	if(x >= windowWidth || x <= 0 ){
	xposition = xposition * -1;
	}
	
	if(y >= windowHeight || y <= 0){
	yposition = yposition * -1;
	}
	
}