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
    this.speedX = 4;
    this.speedY = 2;
  }

  move() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
  }

  direction() {
    if (this.x >= 600 || this.x <= 0) {
      this.speedX = this.speedX * -1; 
    }
    
    if(this.y >= 400 || this.y <= 0){
      this.speedY = this.speedY * -1;
    }
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 20, 20);
  }
}
