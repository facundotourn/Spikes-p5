var pajaro;
var pinche;
var gravedad = 0.35;

function setup() {
  createCanvas(480, 800);
  pajaro = new Pajaro(width / 2, height / 4);
}

function draw() {
  background(130);
  showPoints();

  pajaro.show();
  pajaro.update();
}

function mousePressed() {
  if(pajaro.mov) {
    gameOver();
  }
}

function keyPressed() {
  if(key === ' ') {
    pajaro.jump();
    pajaro.mov = true;
  }
}

function touchStarted() {
  pajaro.jump();
  pajaro.mov = true;
}

function gameOver() {
  pajaro.resetPos();
}

function showPoints() {
  noStroke();
  fill(255);
  ellipse(width / 2, height / 2, width * 0.50, width * 0.50);
  textSize(150);
  textAlign(CENTER, CENTER);
  textFont("Courier New");
  fill(130)
  text(pajaro.rebotes, width / 2, height / 2);
}
