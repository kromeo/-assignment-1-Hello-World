function setup (){
	createCanvas(720,480);
	background(0);
	noStroke();
}

function draw(){

}

function keyTyped() {
	if (key === 'k') {
		fill (136, 73, 143)
		rect (random(width), random(height), 100,100);
	}

	if (key === 'i') {
		fill (255, 101, 66)
		rect (random(width), random(height), 200,100);
}
if (key === 'a') {
		fill (119,159,161)
		rect (random(width), random(height), 50,100);
}
if (key === 'n') {
		fill (86, 65, 84)
		rect (random(width), random(height), 150,300);
}

}
