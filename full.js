function drawFull() {
  background(150, 255, 200);
  textAlign(CENTER, CENTER);
  textSize(40);
  text("You are full!", width / 2, 200);
  textSize(20);
  text("Click or press R to return to start.", width / 2, 300);
}

function fullMousePressed() {
  currentScreen = "start";
}
function fullKeyPressed() {
  if (key === "r" || key === "R") currentScreen = "start";
}
