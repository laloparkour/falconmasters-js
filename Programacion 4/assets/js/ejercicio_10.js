var text = prompt("Escribe una cadena: ");

function infoCadena(cadena) {
    cadena.replace(/ /g,'');

    var cadenaMayus = cadena.toUpperCase();
    var cadenaMinus = cadena.toLowerCase();

    if (cadena == cadenaMayus) {
        return ("La cadena solo contiene mayusculas");
    } else if (cadena == cadenaMinus) {
        return ("La cadena solo contiene minusculas");
    } else {
        return ("La cadena tiene una combinacion de mayusculas y minusculas");
    }

}

console.log(infoCadena(text));

var mensaje = infoCadena(text);

alert(mensaje);