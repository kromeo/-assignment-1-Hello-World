var y = 100;

// The statements in the setup() function 
// execute once when the program begins
function setup() {
  createCanvas(850, 850);  // Size must be the first statement
  	strokeWeight(random(0.3,5))
     // Set line drawing color to white
  frameRate(30);
}
// The statements in draw() are executed until the 
// program is stopped. Each statement is executed in 
// sequence and after the last line is read, the first 
// line is executed again.
function draw() { 
	
} 


  function mouseClicked(){
  	stroke (255);
  		line(0,random(y), width, random(y));
  	}

  	function mouseDragged() {
   stroke(random(255),100,100);
  background(0);   // Set the background to black
  y = y - 1; 
  if (y < 0) { 
    y = height; 
  } 
  line(5, random(y), width, random(y));
  line(5, random(y), width, random(y));   
  line(5, random(y), width, random(y)); 
  line(5, random(y), width, random(y)); 

 stroke(random(100),100,255);
y = y + 1; 
  if (y > 0) { 
    y = height; 
  } 
  line(5, random(y), width, random(y));
  line(5, random(y), width, random(y));   
  line(5, random(y), width, random(y)); 
  line(5, random(y), width, random(y)); 
  }