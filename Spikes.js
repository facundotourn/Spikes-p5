var pajaro;
var gravedad = 0.35;

function setup() {
  createCanvas(500, 750);
  pajaro = new Pajaro(width / 2, height / 2);
}

function draw() {
  background(130);
  noStroke();
  fill(255);
  ellipse(width / 2, height / 2, width * 0.50, width * 0.50);
  textSize(150);
  textAlign(CENTER, CENTER);
  textFont("Courier New");
  fill(130)
  text(pajaro.rebotes, width / 2, height / 2);

  pajaro.show();
  pajaro.update();
}

function mousePressed() {
  if(pajaro.mov) {
    pajaro.resetPos();
  }
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    pajaro.jump();
    pajaro.mov = true;
  }
}
