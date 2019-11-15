'use strict';

// constructor de objetos
function Coche(ruedas) {
  this.ruedas = ruedas;
  this.cuantasRuedas = function() {
    console.log('tiene', this.ruedas, 'ruedas');
  }
}

const todoterreno = new Coche(4);

// donde estén los parentesis () lo que hay a la izquierda del punto en esa instrucción.
// todoterreno.cuantasRuedas();

setTimeout(todoterreno.cuantasRuedas.bind(todoterreno), 2000);

// const otraVariable = todoterreno.cuantasRuedas.bind(todoterreno);
// otraVariable();