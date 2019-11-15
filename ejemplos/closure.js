'use strict';

function crear(numero) {

  return {
    porDos: function() {
      const resultado = numero * 2;
      console.log('el numero es', resultado);
      return resultado;
    }
  };

}

const calculador4 = crear(4);
const calculador6 = crear(6);

//console.log(calculador4.porDos());

//console.log(calculador6.porDos());

// los metodos creados con closures no pierden nunca el acceso al objeto propietario
setTimeout(calculador6.porDos, 2000);
