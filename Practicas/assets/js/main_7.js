/*
    Escribe un programa que pida un número entero mayor que 1 y que escriba si el número es primo o no.
    Un número primo es aquel que solo es divisible por si mismo y la unidad.
*/


let numero = parseInt(prompt('Introduce un número: '));
let cont = 0;

if (numero === 0 || numero === 1) {
    document.write('El número no es válido');
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            document.write(`<br>${numero} / ${i} = ${numero / i} - No es primo`);
            cont++;
            break;
        }
    }
    
    if(cont == 0) {
        document.write(`${numero} - Es primo`);
    }
}
