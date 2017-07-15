function FilaPinches(x, y, orientacion, arista) {
  this.x = x;
  this.y = y;
  this.orientacion = orientacion;
  this.arista = arista;

  this.pinches = []

  // Cargando pinches en el array
  if(this.orientacion[1] == 0) {
    this.cantP = (height / arista) - 1;
    if(this.orientacion[0] == 1) {
      // Fila de la izquierda
      for(var i = 1; i < this.cantP; i++) {
        var p = new Pinche(this.x, i * this.arista + this.arista / 2, this.orientacion);
        this.pinches.push(p);
      }
    } else if(this.orientacion[0] == -1) {
      // Fila de la derecha
      for(var i = 1; i < this.cantP; i++) {
        var p = new Pinche(this.x, i * this.arista + this.arista / 2, this.orientacion);
        this.pinches.push(p);
      }
    }
  } else {
    this.cantP = (width / arista);
    if(this.orientacion[1] == 1) {
      // Fila de abajo
      for(var i = 0; i < this.cantP; i++) {
        var p = new Pinche(i * this.arista + this.arista / 2, this.y, this.orientacion);
        this.pinches.push(p);
      }
    } else {
      // Fila de arriba
      for(var i = 0; i < this.cantP; i++) {
        var p = new Pinche(i * this.arista + this.arista / 2, this.y, this.orientacion);
        this.pinches.push(p);
      }
    }
  }

  this.draw = function() {
    for(var i = 0; i < this.pinches.length; i++) {
      this.pinches[i].draw();
    }
  }

  this.update = function() {
    for(var i = 0; i < this.pinches.length; i++) {
      this.pinches[i].update();
    }
  }

  this.ocultar = function() {
    for(var i = 0; i < this.pinches.length; i++) {
      this.pinches[i].visible = false;
    }
  }

  this.mostrar = function() {
    if(pajaro.rebotes / 4 + 4 < this.pinches.length * 0.75) {
      var max = floor(pajaro.rebotes / 7) + 4;
    } else {
      var max = 15;
    }
    for(var i = 0; i < max; i++) {
      var index = floor(random(0, this.pinches.length - 1));
      this.pinches[index].visible = true;
    }
  }
}
