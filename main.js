let currentScreen = "start"; 

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  // call screen
  if (currentScreen === "start") drawStart();
  else if (currentScreen === "food") drawFood();
  else if (currentScreen === "drink") drawDrink();
  else if (currentScreen === "full") drawFull();
  else if (currentScreen === "exploded") drawExploded();
}

// Mouse 
function mousePressed() {
  if (currentScreen === "start") startMousePressed();
  else if (currentScreen === "food") foodMousePressed();
  else if (currentScreen === "drink") drinkMousePressed();
  else if (currentScreen === "full") fullMousePressed();
  else if (currentScreen === "exploded") explodedMousePressed();
}

// Keyboard 
function keyPressed() {
  if (currentScreen === "start") startKeyPressed();
  else if (currentScreen === "food") foodKeyPressed();
  else if (currentScreen === "drink") drinkKeyPressed();
  else if (currentScreen === "full") fullKeyPressed();
  else if (currentScreen === "exploded") explodedKeyPressed();
}
