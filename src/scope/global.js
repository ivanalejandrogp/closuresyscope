// Variables definidas en el scope global

var hello = 'Hello';
var hello = 'Hello 2'; // Se sobreescribe el valor de hello, siendo ésto una mala práctica
let world = 'Hello World';
let world = 'Hello'; // Las palabras reservadas let y const no permiten la reasignación de variables
const helloWorld = 'Hello World!';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloWorld = () => {
    globalVar = 'imGlobal'; //Al no utilizar las palabras reservadas, js toma la asignación de variable como global, aún estando dentro de una función
}

helloWorld();
console.log(globalVar); //Pudiendo acceder a ella desde fuera de la función, lo cuál es una mala práctica

const anotherFunction = () => {
    var localVar = globalVar = 'imGlobal';
    /*Al hacer una doble asignación de variables 
    aún estando dentro de una función y aunque la primera variable 
    tenga la palabra reservada 'var' js toma la asignación 
    como global.*/
}
anotherFunction();
console.log(globalVar);
