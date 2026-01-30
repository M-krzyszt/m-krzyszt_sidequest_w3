function drawFood() {
  background(255, 230, 200);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(0);
  text("You're hungry! What do you want to eat?", width / 2, 100);

  textSize(24);

  // Hotdog Button
  let hotdogX = width / 2;
  let hotdogY = 200;
  let hotdogW = 200;
  let hotdogH = 40;

  // hover + button
  if (
    mouseX > hotdogX - hotdogW / 2 &&
    mouseX < hotdogX + hotdogW / 2 &&
    mouseY > hotdogY - hotdogH / 2 &&
    mouseY < hotdogY + hotdogH / 2
  ) {
    fill(180, 255, 180);
  } else {
    fill(200);
  }
  rect(hotdogX - hotdogW / 2, hotdogY - hotdogH / 2, hotdogW, hotdogH, 10);

  fill(0);
  text("Hotdog", hotdogX, hotdogY);

  // Pasta Button
  let pastaX = width / 2;
  let pastaY = 250;
  let pastaW = 200;
  let pastaH = 40;

  if (
    mouseX > pastaX - pastaW / 2 &&
    mouseX < pastaX + pastaW / 2 &&
    mouseY > pastaY - pastaH / 2 &&
    mouseY < pastaY + pastaH / 2
  ) {
    fill(180, 255, 180);
  } else {
    fill(200);
  }
  rect(pastaX - pastaW / 2, pastaY - pastaH / 2, pastaW, pastaH, 10);

  fill(0);
  text("Pasta", pastaX, pastaY);
}

function foodMousePressed() {
  if (mouseY > 180 && mouseY < 220) currentScreen = "drink";
  else if (mouseY > 230 && mouseY < 270) currentScreen = "drink";
}
