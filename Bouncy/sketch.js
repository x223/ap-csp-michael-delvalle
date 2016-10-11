
function setup() { 
  createCanvas(windowWidth, windowHeight);
} 

var x = 1;
var y = 1;
var xpos = 1;
var ypos = 1;

function draw() {
x = x + 1 * xpos;
y = y + 1 * ypos;	
xpos = xpos + 0.5;
ypos = ypos + 0.2;
background(220);
ellipse(x,y,20,20);
ellipse(x + 20, y + 20, 20,20);
	
		if(x >= windowWidth || x <= 0 ){
	xpos = xpos * -1;
			fill(0,0,0);
	}

	
	if(y >= windowHeight || y <= 0){
	ypos = ypos * -1;
	fill(210,250,250);
	}
	
}