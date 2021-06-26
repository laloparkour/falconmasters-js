var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'Ñ', 'C', 'K', 'K', 'E', 'T'];
var numero = prompt();

if (numero < 0 || numero > 999999) {
    alert("DNI incorrecto");
}

var letra = letras[numero%23];
var letraUser = prompt("Escribe la letra de tu DNI(MAYUSCULA)");

if (letraUser != letra) {
    alert("La letra ingresa es incorrecta");
} else {
    alert("Los datos ingresados son correctos");
}