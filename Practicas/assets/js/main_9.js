/*
    Escribe un programa que permita ir introduciendo una serie intdetermniada de números mientras su suma no supere 50.
    Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido.
*/



let numero;
let flag = true;
let acum = 0;
let cont = 0;


while (acum < 50) {
    acum += parseInt(prompt('Introduce un número para añadir a la suma: '));
    cont++;
    
}

alert(`Se ingresaron ${cont} números`);