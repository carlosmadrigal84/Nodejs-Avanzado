'use strict';

const fs = require('fs');

// función que retorna una promesa
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const writeFile = (nombreFichero, contenido) => new Promise((resolve, reject) => {
  fs.writeFile(nombreFichero, contenido, (err) => {
    if (err) {
      reject(err);
      return;
    }
    resolve();
  });
});

async function main() {
  console.log('empezo');
  for(let i = 0; i < 5; i++) {
    await sleep(200);
    console.log('sigo');
  }

  //JSON.parse('asdas');

  // try {
  //   await writeFile('/////pepe.txt', 'hola');
  // } catch(err) {
  //   console.log('fallo el writeFile');
  // }

  await writeFile('pepe.txt', 'hola')
    .catch(err => {
      console.log('fallo el writeFile');
    });
  console.log('sigothen');

  console.log('terminado');

}

main().catch(err => {
  console.log('Hubo un error', err);
});
