/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  /* ZombieConductor llama al constructor de Enemigo utilizando los parametros
  necesarios */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion = direccion;
}

/* Creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

/* Metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover = function() {
  //Primero se determina si el tren se debe mover vertica u horizontalmente
  if (this.direccion == "h") {
    this.x += this.velocidad;

    if(this.x < this.rangoMov.desdeX || this.x > this.rangoMov.hastaX){
      this.velocidad *= -1;
    }

  }else{
    this.y += this.velocidad;

    if(this.y < this.rangoMov.desdeY || this.y > this.rangoMov.hastaY){
      this.velocidad *= -1;
    }
  }
}

/**
 * Ataque del tren
 */
ZombieConductor.prototype.atacar = function(jugador) {
  jugador.perderVidas(50);
}
