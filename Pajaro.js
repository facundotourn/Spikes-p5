function Pajaro(x, y) {
  this.x = x;
  this.y = y;
  this.ancho = 50;
  this.alto = 30;
  this.velX = 4;
  this.velY = 2;

  this.show = function() {
    fill(255);
    rectMode(CORNERS);
    rect(this.x - this.ancho / 2, this.y - this.alto / 2, this.x + this.ancho / 2, this.y + this.alto / 2);
  }

  this.update = function() {
    if(this.x + this.ancho / 2 > width || this.x - this.ancho / 2 < 0)
      this.velX = -this.velX;

    this.x += this.velX;

    this.velY += gravedad;

    this.y += this.velY;

    if(this.y > height)
      this.resetPos();
  }

  this.jump = function() {
    this.velY = -8;

  }

  this.resetPos = function() {
    this.x = x;
    this.y = y;
  }



}
