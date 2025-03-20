var x = 0;
var y = 0;
var speed = 1;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(x, y, 100, 100);

  if (x > width) {
    speed = -1;
    x = random(0, 400);
    y = random(0, 400);
  }
  if (x <= 0) {
    speed = 1;
    y = random(0, 400);
  }
  if (y > 400) {
    speed = -1;
    y = random(0, 400);
  }

  if (y <= 0) {
    speed = -1;
  }

  x = x + speed;
  y = y + speed;
}
