'use strict';

const calculadora = require('./calculadora');

calculadora.loquesea = 'algo';

const calculadora2 = require('./calculadora');
const calculadora3 = require('./calculadora');

console.log(calculadora.multiply(1,6));

console.log(calculadora3.loquesea);
