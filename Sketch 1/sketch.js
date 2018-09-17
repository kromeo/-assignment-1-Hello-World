var x = 0;
var y = 950;
var speed = 3;

function setup() {
    // proce55ing
	createCanvas(950,950);
	background(0);
}

function draw() {
	stroke(random(255),100,200);
	strokeWeight(1);
	noFill();
	ellipse(x,475,100,100);

	if (x > width) {
		speed = -2;
	}
		

stroke(random(255),255,100);
	strokeWeight(1);
	noFill();
	ellipse(475,y,100,100);

  if (y > height){
  	speed = 1;
}


x = x + speed;
  	y = y - speed;
		
  }
