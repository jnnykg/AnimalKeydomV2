// Window where images are displayed in preview

let cornerRadius = 6;
let screenWidth = 500;
let screenHeight = 300;
let menuBarHt = 30;

function windowImage() {
  
  rectMode(CENTER);
  background('Honeydew');
  noFill();
  stroke(100, 100, 220);
  // Background 3 bottom lines
  fill('#15E6C6');
  //Bottommost layer
  rect((windowWidth/2) -10 , (windowHeight/3)-50, screenWidth, screenHeight, cornerRadius);
  fill(100, 100, 220, 70);
  rect((windowWidth/2) -10, (windowHeight/3)-60, screenWidth, screenHeight, cornerRadius);
  fill(100, 100, 180, 70);
  rect((windowWidth/2) -10, (windowHeight/3)-70, screenWidth, screenHeight, cornerRadius);

  // Main Window //White Screen
  fill(255);
  rect((windowWidth/2) -10, (windowHeight/3)-80, screenWidth, screenHeight, cornerRadius);
  
  
  // Window Menu Bar and Icons
  fill('#15E6C6');
  rect((windowWidth/2) -10, ((windowHeight/3)-(65)-(screenHeight/2)), screenWidth, menuBarHt, cornerRadius, cornerRadius, 0);
  fill(255, 100, 100);
  circle(windowWidth/2-240, ((windowHeight/3)-(65)-(screenHeight/2)), 12);
  fill(255, 220, 100);
  circle(windowWidth/2-222, ((windowHeight/3)-(65)-(screenHeight/2)), 12);
  fill(100, 255, 100);
  circle(windowWidth/2-204, ((windowHeight/3)-(65)-(screenHeight/2)), 12);
  
  noStroke();
}
