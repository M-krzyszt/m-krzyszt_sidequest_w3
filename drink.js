function drawDrink() {
  background(210, 230, 255);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(0);
  text("What do you want to drink?", width / 2, 100);

  textSize(24);

  // --- Water Button ---
  let waterX = width / 2;
  let waterY = 200;
  let waterW = 200;
  let waterH = 40;

  if (
    mouseX > waterX - waterW / 2 &&
    mouseX < waterX + waterW / 2 &&
    mouseY > waterY - waterH / 2 &&
    mouseY < waterY + waterH / 2
  ) {
    fill(180, 255, 180); // lighter green hover
  } else {
    fill(200); // default button color
  }
  rect(waterX - waterW / 2, waterY - waterH / 2, waterW, waterH, 10);

  fill(0);
  text("Water", waterX, waterY);

  // --- Soda Button ---
  let sodaX = width / 2;
  let sodaY = 250;
  let sodaW = 200;
  let sodaH = 40;

  if (
    mouseX > sodaX - sodaW / 2 &&
    mouseX < sodaX + sodaW / 2 &&
    mouseY > sodaY - sodaH / 2 &&
    mouseY < sodaY + sodaH / 2
  ) {
    fill(180, 255, 180); // lighter green hover
  } else {
    fill(200);
  }
  rect(sodaX - sodaW / 2, sodaY - sodaH / 2, sodaW, sodaH, 10);

  fill(0);
  text("Soda", sodaX, sodaY);
}

function drinkMousePressed() {
  if (mouseY > 180 && mouseY < 220)
    currentScreen = "full"; // Water
  else if (mouseY > 230 && mouseY < 270) currentScreen = "exploded"; // Soda
}
