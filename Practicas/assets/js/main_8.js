/* 
    Escriba un prorgama que pida un número  entero mayor que cero y calcule su factorial.
    El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

    !5 = 5*4*3*2*1 = 120
*/

let numero = parseInt(prompt('Introduce un número: '));
let acum = 1;

if (numero === 0) {
    console.log('Número inválido');
} else {
    
    for (let i = numero; i >= 1; i--) {
        console.log(`!5 -> ${acum} * ${i} = ${acum}`);
        acum *= i;
    }

    console.log(`El factorial de ${numero} es: ${acum}`);
}