'use strict';

console.log('empiezo');

// funcion que escribe un texto en la consola tras dos segundos
function escribeTras2Segundos(texto, callback) {
  setTimeout(function() {
    console.log(texto);
    callback();
  }, 2000);
}

// bucle asíncrono en serie
// llamar a una función con cada elemento de un array en serie, y al terminar llamar el callback de finalización
function serie(arr, fn, callbackFinalizacion) {
  if (arr.length === 0) {
    callbackFinalizacion();
    return;
  }
  fn('texto' + arr.shift(), function() { // fn() sería la llamada a escribeTras2Segundos
    serie(arr, fn, callbackFinalizacion);
  })
}

serie( [1, 2, 3, 4, 5], escribeTras2Segundos, function() {
  console.log('fin');
})
