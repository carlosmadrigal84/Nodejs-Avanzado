'use strict';

// definimos una función constructora de objetos
function Persona(nombre) {
  this.nombre = nombre;

}

// construir un objeto
const luis = new Persona('Luis');
const pepe = new Persona('Pepe');
const manolo = new Persona('Manolo');

//console.log(Persona.prototype);

Persona.prototype.saluda = function() {
  console.log('Hola, me llamo', this.nombre);
}

luis.saluda();

// Herencia de persona -----------------------------------------------

// constructor de Agentes
function Agente(nombre) {
  // heredar el constructor de personas
  Persona.call(this, nombre);
}

// heredamos sus propiedades y métodos
Agente.prototype = Object.create(Persona.prototype);
Agente.prototype.constructor = Agente;

const smith = new Agente('Smith');

smith.saluda();

console.log(
  smith instanceof Agente,
  smith instanceof Persona,
  smith instanceof Object,
);

// Herencia múltiple -------------------------------------------------

// Mixin Superheroe
function Superheroe() {
  this.vuela = function() {
    console.log(this.nombre, 'vuela');
  }
  this.esquivabalas = function() {
    console.log(this.nombre, 'esquiva balas');
  }
}

// copiar todas las propidades y métodos de Superheroe al prototipo del Agente

Object.assign(Agente.prototype, new Superheroe());

smith.vuela();
smith.esquivabalas();
