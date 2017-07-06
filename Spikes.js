var pajaro;
var gravedad = 0.35;

function setup() {
  createCanvas(500, 750);
  pajaro = new Pajaro(width / 2, height / 2);
}

function draw() {
  background(0);
  pajaro.show();
  pajaro.update();
}

function mousePressed() {
  pajaro.jump();
}
