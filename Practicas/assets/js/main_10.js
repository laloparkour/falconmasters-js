/* 
    Crear 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos.
    Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, 
    si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares.
    Muestra por consola:
        -La multiplicacion que se produce junto con su resultado con el formato 2 x 3 = 6
        -El array de pares e impares      
*/

const numeros = [5, 7, 9, 10, 3];
let pares = [];
let impares = [];


for (const numero of numeros) {
    let random = Math.round(Math.random() * 10 + 1);
    let resultado = numero * random;

    console.log(`${numero} * ${random} = ${resultado}`);

    if (resultado % 2 == 0) {
        pares.push(resultado);
    } else {
        impares.push(resultado);
    }

}

console.log(`${pares}`);
console.log(`${impares}`);

