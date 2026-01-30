function drawStart() {
  background(200, 150, 255);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(40);
  text("Lunch Time!", width / 2, 150);
  textSize(20);
  text("Click or press Enter to start", width / 2, 250);
}

function startMousePressed() {
  currentScreen = "food";
}
function startKeyPressed() {
  if (key === "Enter") currentScreen = "food";
}
