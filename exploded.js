function drawExploded() {
  background(255, 100, 100);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(40);
  text("You exploded!", width / 2, 200);
  textSize(20);
  text("Click or press R to return to start.", width / 2, 300);
}

function explodedMousePressed() {
  currentScreen = "start";
}
function explodedKeyPressed() {
  if (key === "r" || key === "R") currentScreen = "start";
}
