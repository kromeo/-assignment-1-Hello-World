function setup (){
	createCanvas (950,950);
	scale (-1,1);
}

function draw (){
	//line(width/2, height/2, 85, 75);	
}

function mouseDragged(){
	stroke(mouseX,mouseY, 200);
	strokeWeight(1)
	line(mouseX, mouseY, 475,475)
}
