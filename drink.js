function drawDrink() {
  background(200, 255, 200);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("What do you want to drink?", width / 2, 100);

  textSize(24);
  text("1. Water", width / 2, 200);
  text("2. Soda", width / 2, 250);
}

function drinkMousePressed() {
  if (mouseY > 180 && mouseY < 220)
    currentScreen = "full"; // Water
  else if (mouseY > 230 && mouseY < 270) currentScreen = "exploded"; // Soda
}

function drinkKeyPressed() {
  if (key === "1") currentScreen = "full";
  else if (key === "2") currentScreen = "exploded";
}
