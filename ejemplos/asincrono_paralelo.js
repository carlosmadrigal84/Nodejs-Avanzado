'use strict';

console.log('empiezo');

// funcion que escribe un texto en la consola tras dos segundos
function escribeTras2Segundos(texto, callback) {
  setTimeout(function() {
    console.log(texto);
    callback();
  }, 2000);
}

// si usamos un bucle for, while, etc, lanzamos todas las iteraciones en paralelo
// porque cada vuelta no espera a que termine la anterior.
for(let n = 0; n < 5; n++) {
  escribeTras2Segundos('texto', function() {
    console.log('termino' + n);
  });
}

console.log('fin');