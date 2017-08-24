function setup() {
  createCanvas(640, 480);
  background(150);
}

function draw() {
  if (mouseIsPressed) {
    stroke(255);
    fill(0);
  } else {
  	stroke(0);
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}