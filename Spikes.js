var pajaro;
var pinches = [];
var pinche;
var pinche2;
var gravedad = 0.35;
var pinchesUp;
var pinchesLeft;
var pinchesRight;
var pinchesDown;

function setup() {
  createCanvas(480, 800);
  pajaro = new Pajaro(width / 2, height / 4);
  // pinche = new Pinche(width, height / 4, [-1, 0]);
  // pinche2 = new Pinche(width / 2, height, [0, -1]);
  //
  // for(var i = 0; i < height / 40; i++) {
  //   var p = new Pinche(width, 40 * i + 20, [-1, 0]);
  //   pinches.push(p);
  // }

  pinchesUp = new FilaPinches(0, 0, [0, 1], 40);
  pinchesLeft = new FilaPinches(0, 0, [1, 0], 40);
  pinchesRight = new FilaPinches(width, 0, [-1, 0], 40);
  pinchesDown = new FilaPinches(0, height, [0, -1], 40);
}

function draw() {
  background(130);
  showPoints();

  pajaro.show();
  pajaro.update();

  pinchesUp.draw();
  pinchesUp.update();
  pinchesDown.draw();
  pinchesDown.update();
  pinchesRight.draw();
  pinchesRight.update();
  pinchesLeft.draw();
  pinchesLeft.update();
}

function mousePressed() {
  if(pajaro.mov) {
    gameOver();
  }

  if(pinchesRight.pinches[0].visible) {
    pinchesRight.ocultar();
    pinchesLeft.ocultar();
  } else {
    pinchesLeft.mostrar();
    pinchesRight.mostrar();
  }
}

function keyPressed() {
  if(key === ' ') {
    pajaro.jump();
    pajaro.mov = true;
  }

  if(key == 'a') {
    if(pinche.visible)
      pinche.hide();
    else
      pinche.show();
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
  fill(75);
  ellipse(width / 2 + 15, height / 2 + 15, width * 0.52, width * 0.52);
  fill(255);
  ellipse(width / 2, height / 2, width * 0.50, width * 0.50);
  textSize(150);
  textAlign(CENTER, CENTER);
  textFont("Courier New");
  fill(130)
  text(pajaro.rebotes, width / 2, height / 2);
}
