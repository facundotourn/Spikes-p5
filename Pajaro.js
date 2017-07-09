function Pajaro(x, y) {
  this.posicion = createVector(x, y);
  this.vel = createVector(4, 2);
  this.acc = createVector(0, gravedad);
  this.ancho = 60;
  this.alto = 35;
  this.mov = false; // Indica si el pájaro se está moviendo o no
  this.rebotes = 0; // Cantidad de rebotes que dio el pájaro contra las paredes

  this.p1 = createVector(this.posicion.x - this.ancho / 2, this.posicion.y - this.alto / 2); // Arriba izquierda
  this.p2 = createVector(this.posicion.x + this.ancho / 2, this.posicion.y - this.alto / 2); // Arriba derecha
  this.p3 = createVector(this.posicion.x - this.ancho / 2, this.posicion.y + this.alto / 2); // Abajo izquierda
  this.p4 = createVector(this.posicion.x + this.ancho / 2, this.posicion.y + this.alto / 2); // Abajo derecha


  this.show = function() {
    // Dibujar un rectángulo blanco en las coordenadas (x, y)
    fill(0, 100, 200);
    rect(this.posicion.x - this.ancho / 2, this.posicion.y - this.alto / 2, this.ancho, this.alto, 10);
  }

  this.update = function() {

    // Si la posición en x del pajaro se va muy para la izquierda o muy para la derecha se invierte el sentido de la velocidad
    if(this.posicion.x + this.ancho / 2 > width || this.posicion.x - this.ancho / 2 < 0) {
      this.vel.x = -this.vel.x * 1.01;
      this.rebotes++;
      puntaje = this.rebotes;

      var i = floor((this.posicion.y + this.alto / 2) / 40 - 1);
      var j = floor((this.posicion.y - this.alto / 2) / 40 - 1);
      //console.log(i + ", " + j);

      if(j == -1)
        j = 0;

      if(pinchesRight.pinches[i].visible || pinchesLeft.pinches[i].visible
      || pinchesRight.pinches[j].visible || pinchesLeft.pinches[j].visible) {
        gameOver();
        puntaje--;
      }

      if(this.vel.x > 0) {
        pinchesRight.mostrar();
        pinchesLeft.ocultar();
      } else {
        pinchesRight.ocultar();
        pinchesLeft.mostrar();
      }
    }

    if(this.mov) {
      // La posición del pajaro se actualiza
      this.posicion.add(this.vel);
      // La velocidad de caída se actualiza
      this.vel.add(this.acc);
      // La posición en y del pájaro se actualiza
      //this.posicion.y += this.velY;
    }

    // Si el pájaro sale de la pantalla se termina el juego
    if(this.posicion.y + this.alto / 2 > height - 40 * 0.7 || this.posicion.y - this.alto / 2 < 40 * 0.7)
      gameOver();
  }

  this.jump = function() {
    this.vel.y = -8;
  }

  this.resetPos = function() {
    //
    this.posicion.x = x;
    this.posicion.y = y;
    this.mov = false;
    this.rebotes = 0;
    this.vel.x = 4;
  }



}
