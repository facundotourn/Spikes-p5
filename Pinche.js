function Pinche(x, y, orientacion) {
  this.x = x;
  this.y = y;
  this.orientacion = orientacion;
  this.arista = 40;

  this.show = function() {
    fill(255);
    noStroke();
    triangle(this.x, this.y + this.arista * 0.5, this.x, this.y - this.arista * 0.5, this.x - this.arista * 0.7, this.y);
  }

}
