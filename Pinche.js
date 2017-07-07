function Pinche(x, y, orientacion) {
  this.x = x;
  this.y = y;
  this.orientacion = orientacion;
  this.arista = 40;
  this.visible = false;

  this.p1 = [this.x, this.y + this.arista * 0.5];
  this.p2 = [this.x, this.y - this.arista * 0.5];
  this.p3 = [this.x - this.arista * 0.7, this.y];


  this.draw = function() {
    fill(255);
    noStroke();
    triangle(this.p1[0], this.p1[1], this.p2[0], this.p2[1], this.p3[0], this.p3[1]);
  }

  this.update = function() {
    if (!this.visible && this.orientacion[1] == 0) {
      if(this.orientacion[0] == 1) {
        // Es un pinche de la izquierda
        if(this.x > x - this.arista * 0.7) {
          this.x -= 3;
          this.calcularPuntos();
        }
      } else if(this.orientacion[0] == -1) {
        // Es un pinche de la derecha
        if(this.x < x + this.arista) {
          this.x += 3;
          this.calcularPuntos();
        }
      }
    } else if(this.visible && this.orientacion[1] == 0) {
      if(this.orientacion[0] == 1) {
        // Es un pinche de la izquierda
        if(this.x < 0) {
          this.x += 3;
          this.calcularPuntos();
        }
      } else if(this.orientacion[0] == -1) {
        // Es un pinche de la derecha
        if(this.x > x) {
          this.x -= 3;
          this.calcularPuntos();
        }
      }
    }
  }

  this.ocultar = function() {
    this.visible = false;
  }

  this.mostrar = function() {
    this.visible = true;
  }

  this.calcularPuntos = function() {
    if(orientacion[1] == 0) {
      if(orientacion[0] == 1) {
        this.p1 = [this.x, this.y + this.arista * 0.5];
        this.p2 = [this.x, this.y - this.arista * 0.5];
        this.p3 = [this.x + this.arista * 0.7, this.y];
      } else {
        this.p1 = [this.x, this.y + this.arista * 0.5];
        this.p2 = [this.x, this.y - this.arista * 0.5];
        this.p3 = [this.x - this.arista * 0.7, this.y];
      }
    }
  }
}
