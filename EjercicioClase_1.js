'use strict';

// CONCATENACIÓN DE METODOS

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const palabras = meses
    .filter (palabrasLargas => palabrasLargas.length > 7) 
    .map (palabrasLargas => palabrasLargas.toUpperCase());

console.log(palabras)

let cantidad = palabras.length
console.log(cantidad)

// Así se hace de manera separada

const filteredMeses = meses.filter (function(mes) {
    return mes.length > 7;
});
console.log(filteredMeses);

const mesesMayus = filteredMeses.map(function(month) {
    return month.toUpperCase();
})
console.log(mesesMayus);



// ARRAY DE OBJETOS

const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: true},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 20, premium: false},
    {username: 'sergio58', age: 26, premium: true}
];

const mayores = users.filter(function(edad){
    return edad.age > 25;
});
console.log(mayores);

// Otra manera de hacerlo y que te quede en un mismo array

let señores = [];

for (const usuarios of users) {
    
    if (usuarios.age > 25) {

        señores.push(usuarios)
    }
};


// CONSTRUCTOR 'this' -> añade objetos a una classe instanciandolo, el primer elemento serà name, el segundo type, el tercero cal, el cuarto grass. el nombre de la propiedad que queremos poner va despues del this.

class Food {
    constructor (name, type, cal, grassas) {
        this.name = name;
        this.type = type;
        this.cal = cal;
        this.grass = grassas;
    }
};

const donut = new Food('donut', 'sweet', 452, 550);
const beer = new Food('beer', 'drink', 43, 60);
const apple = new Food('apple', 'fruit', 52, 30);

console.log(donut);
console.log(beer);
console.log(apple);


// Ejercicio

class cuadrado {
    constructor (altura, base, amplitud) {
        this.altura = altura;
        this.base = base;
        this.amplitud = amplitud
    }
};

const pequeño = new cuadrado (2, 2, 2);
const mediano = new cuadrado (5, 5, 5);
const grande = new cuadrado (10, 10, 10);




class square {
    constructor (lado) {
        this.lado = lado
        this.perimetro = lado *4;
        this.area = lado*lado;

        // si definimos aqui dentro la funcion podemos utilizar las variables del constructor, sinó no nos sirven

        this.calcularVolumen = function (lado) {
            console.log(lado * this.area);
        }
    }

    // Aqui no e pueden usar las variables del constructor
   
    print () {
        console.log ('printed');
    }

};

const peque = new square (2);
const medi = new square (5);
const gran = new square (10);
console.log ('pequeño', peque);
console.log ('mediano', medi);
console.log ('grande', gran);

peque.calcularVolumen()

console.log (peque.calcularVolumen());


// Ejercicio clase facturas

class Factura {
    constructor (cliente, elementos) {
        this.cliente = cliente
        this.elementos = elementos;
        this.informacion = {
            baseImponible: 0,
            iva: 21,
            total: 0,
            formaPago: 'efectivo'
        }
// Para crear una función has de poner un numbre dentro de this. en este caso calcularBaseImponible, despues declarar que es una función i ponerle un nuombre en el parentesis, despues se abren llaves i se declara donde queremos que se nos haga el calculo y ponemos la operación que queremos que nos haga.

        this.calcularBaseImponible = function (calculo) {
            return this.informacion.baseImponible = (this.elementos.cantidad*this.elementos.precio); 
                       
        }

        this.calcularTotal = function (calculo) {
            return this.informacion.total = (this.informacion.baseImponible * (1+(this.informacion.iva/100)))

        }
    }
};

class Cliente {
    constructor (nombre, direccion, telefono, nif) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }
};



class Elemento {
    constructor (descripcion, cantidad, precio) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    }
};


const cliente1 = new Cliente ('Bea', 'Barcelona', 722545119, '47733504V')
console.log(cliente1);
const objeto1 = new Elemento ('botella', 1, 5);
console.log (objeto1);
const factura1 = new Factura (cliente1, objeto1);
console.log(factura1);

// Para ejecutar una funcion tienes que poner primero el nombre (factura1) i luego declarar la función con los parentesisi
console.log(factura1.calcularBaseImponible());

console.log(factura1.calcularTotal());
