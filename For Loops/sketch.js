function setup() { 
// createCanvas(windowWidth, windowHeight);
  createCanvas(400,400);
 background(0);
} 

function draw() { 
  // background(random(255),random(255),random(255));
  // ellipse(mouseX,mouseY,25,25);
for(x = 5; x < windowWidth; x = x + 10 ){
  for(y = 5; y < windowHeight; y = y + 10 ){
    stroke(random(255),random(255),random(255));
fill(random(255),random(255),random(255));
    ellipse(x, y, random(10) ,random(10));
  }
}
}