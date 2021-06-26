var factorial = prompt("De que factorial deseas saber su valor: ");
var resultado = 1;

for (var i = 1; i <= factorial; i++) {
    resultado = (resultado * i);
}

alert("El resultado es: " + resultado);