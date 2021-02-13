'use strict';

// Numero de enlaces en la pagina

const enlaces = document.getElementsByTagName ('a');
console.log (enlaces.length);

// Penultimo enlace

console.log (enlaces[4]);

const penultimo = enlaces[enlaces.length -2];
console.log (penultimo.href);

// Numero de enlaces del tercer parrafo

const tercero = document.getElementById ('thirdparagraph');
console.log (tercero);

const enlaceTer = tercero.getElementsByTagName ('a');
console.log(enlaceTer.length);

// Se ha añadido un ID para ver el resultado
const resultado = document.getElementById ('resultado');
resultado.innerHTML = enlaceTer.length;