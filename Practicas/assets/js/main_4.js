/*
    Solicita un nombre, la edad y muestra por consola el mensaje "Hola _____, tienes ______ años y el año que viene tendrás ____ años ".
    Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings. 
*/

let nombre = prompt('Introduce tu nombre: ');
let edad = parseInt(prompt('Introduce tu edad: '), 10);

console.log(`Hola ${nombre} tienes ${edad} años y el año que viene tendrás ${edad + 1} años.`);

//console.log("Hola " + nombre + " tienes " + edad + " años y el año que viene tendrás " + edad+1 + " años.");

