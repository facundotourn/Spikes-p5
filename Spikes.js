var pajaro;
var pinche;
var pinche2;
var gravedad = 0.35;

function setup() {
  createCanvas(480, 800);
  pajaro = new Pajaro(width / 2, height / 4);
  pinche = new Pinche(width, height / 4, [-1, 0]);
  pinche2 = new Pinche(0, height / 4, [1, 0]);
}

function draw() {
  background(130);
  showPoints();

  pajaro.show();
  pajaro.update();

  pinche.draw();
  pinche.update();
  pinche2.draw();
  pinche2.update();
}

function mousePressed() {
  if(pajaro.mov) {
    gameOver();
  }

  if(pinche.visible) {
    pinche.ocultar();
    pinche2.ocultar();
  } else {
    pinche.mostrar();
    pinche2.mostrar();
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
  fill(255);
  ellipse(width / 2, height / 2, width * 0.50, width * 0.50);
  textSize(150);
  textAlign(CENTER, CENTER);
  textFont("Courier New");
  fill(130)
  text(pajaro.rebotes, width / 2, height / 2);
}
