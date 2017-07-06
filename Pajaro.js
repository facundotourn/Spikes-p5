function Pajaro(x, y) {
  this.x = x;
  this.y = y;
  this.ancho = 60;
  this.alto = 35;
  this.velX = 4;
  this.velY = 2;
  this.mov = false;
  this.rebotes = 0;

  this.show = function() {
    // Dibujar un rectángulo blanco en las coordenadas (x, y)
    fill(0, 100, 200);
    rectMode(CORNERS);
    rect(this.x - this.ancho / 2, this.y - this.alto / 2, this.x + this.ancho / 2, this.y + this.alto / 2);
  }

  this.update = function() {
    // Si la posición en x del pajaro se va muy para la izquierda o muy para la derecha se invierte el sentido de la velocidad
    if(this.x + this.ancho / 2 > width || this.x - this.ancho / 2 < 0) {
      this.velX = -this.velX;
      this.rebotes++;
    }

    if(this.mov) {
      // La posición en x del pajaro se actualiza
      this.x += this.velX;
      // La velocidad de caída se actualiza
      this.velY += gravedad;
      // La posición en y del pájaro se actualiza
      this.y += this.velY;
    }

    // Si el pájaro sale de la pantalla se resetea a la posición inicial
    if(this.y > height || this.y < 0)
      this.resetPos();
  }

  this.jump = function() {
    this.velY = -8;
  }

  this.resetPos = function() {
    this.x = x;
    this.y = y;
    this.mov = false;
    this.rebotes = 0;
  }



}
