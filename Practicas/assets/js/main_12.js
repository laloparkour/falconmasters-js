
/*
    Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
*/


const palabra = prompt('Introduce una palabra: ');

let consonantes = 0;
let vocales = 0;

for (const letra of palabra) {
    if (letra == 'A' || letra == 'a' && letra == 'E' && letra == 'e' && letra == 'I' && letra == 'i' &&
    letra == 'O' & letra == 'o' && letra == 'U' && letra == 'u') {
        vocales++;
    } else {
        consonantes++;
    }
}

console.log(`Número de consonantes: ${consonantes}`);
console.log(`Número de vocales: ${vocales}`);
console.log(`Longitud de la palabra: ${palabra.length}`);
