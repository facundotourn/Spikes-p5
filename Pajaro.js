function Pajaro(x, y) {
  this.x = x;
  this.y = y;
  this.ancho = 50;
  this.alto = 30;
  this.velX = 4;
  this.velY = 2;

  this.show = function() {
    // Dibujar un rectángulo blanco en las coordenadas (x, y)
    fill(255);
    rectMode(CORNERS);
    rect(this.x - this.ancho / 2, this.y - this.alto / 2, this.x + this.ancho / 2, this.y + this.alto / 2);
  }

  this.update = function() {
    // Si la posición en x del pajaro se va muy para la izquierda o muy para la derecha se invierte el sentido de la velocidad
    if(this.x + this.ancho / 2 > width || this.x - this.ancho / 2 < 0)
      this.velX = -this.velX;

    // La posición en x del pajaro se actualiza
    this.x += this.velX;

    // La velocidad de caída se actualiza
    this.velY += gravedad;

    // La posición en y del pájaro se actualiza
    this.y += this.velY;

    // Si el pájaro sale de la pantalla se resetea a la posición inicial
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
