function Pajaro(x, y) {
  this.x = x;
  this.y = y;
  this.ancho = 50;
  this.alto = 30;

  this.show = function() {
    fill(255);
    rectMode(CORNERS);
    rect(this.x - this.ancho / 2, this.y - this.alto / 2, this.x + this.ancho / 2, this.y + this.alto / 2);
  }

}
