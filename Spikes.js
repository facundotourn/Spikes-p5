var pajaro;

function setup() {
  createCanvas(500, 750);
  pajaro = new Pajaro(width / 2, height / 2);
}

function draw() {
  background(0);
  pajaro.show();
}
