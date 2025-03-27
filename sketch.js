let bubble1;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble();
}

function draw() {
  background(0);

  bubble1.show();
  bubble1.direction();
  bubble1.move();
}

class Bubble {
  constructor() {
    this.x = 50;
    this.y = 50;
    this.speed = 3;
  }

  move() {
    this.x = this.x + this.speed;
    // this.y = this.y + this.speed;
  }

  direction() {
    if (this.x >= 600) {
      this.speed = -5;
    }
    if (this.x <= 0) {
      this.speed = 5;
    }
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 20, 20);
  }
}
