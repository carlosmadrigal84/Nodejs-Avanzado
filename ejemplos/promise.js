'use strict';

const fsPromise = require('fs').promises;

// función que retorna una promesa
function sleep(ms) {
  return new Promise((resolve, reject) => {
    // aquí va el código que hará resolverse o rechazarse la promesa
    setTimeout(() => {
      // try {
      //   JSON.parse('ahjsdka');
      // } catch(err) {
      //   reject(err);
      // }
      resolve('algo');
      //reject(new Error('fatal'));
    }, ms);
  });
}

const sleep2 = ms => new Promise(resolve => setTimeout(resolve, ms));

// obtener la promesa
const promesa = sleep(2000);

console.log(promesa);

// cosumir la promesa
promesa.then((algo) => {
  console.log('la promesa se completó con', algo);
  return algo; // .then() devuelve una promesa, y si nosotros retornamos algo, esa promesa se
               // resuleve con ese 'algo'
}).then(algo => {
  return sleep(2000).then(() => {
    console.log('otra cosa', algo);
    //throw new Error('chungo');
    return algo;
  });
}) // .then() devuelve una promesa, que podemos consumir con otro .then()
.then(algo => {
  return sleep(2000).then(() => {
    console.log('otra cosa', algo);
    return algo;
  });
}).then(algo => {
  return sleep(2000).then(() => {
    console.log('otra cosa', algo);
    return algo;
  });
}).then(algo => {
  return sleep(2000).then(() => {
    console.log('otra cosa', algo);
    return algo;
  });
}).then(algo => {
  return sleep(2000).then(() => {
    console.log('otra cosa', algo);
    return algo;
  });
})
.catch(err => {
  console.log('promesa rechazada', err);
});

setTimeout(() => {
  // me suscribo a una promesa ya completada
  promesa.then(() => {
    console.log('promesa inicial completada');
  });
},10000);