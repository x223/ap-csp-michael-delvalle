function setup() { 
  createCanvas(windowWidth, windowHeight);
	 background(220);

} 

function draw() { 
	stroke(random(255),random(255),random(255));
	line(windowWidth/2,windowHeight/2,mouseX,mouseY);

if (mouseX <= windowWidth/2){
strokeWeight(mouseX/3);
}
	else if (mouseX >= windowWidth/2){
	strokeWeight(mouseY/3);
	}
else{}
}