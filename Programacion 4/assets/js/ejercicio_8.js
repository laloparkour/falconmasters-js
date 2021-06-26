var variable = prompt("Escribe una palabra para verificar si es un palindromo: ");

function palindromo(cadena) {
    var clean = cadena.toLowerCase().replace(/ /g,'');
    var cadenInvert = clean.split().reverse().join();

    if (clean == cadenInvert) {
        alert("Es palindromo");
    } else {
        alert("No es palindromo");
    }

    
}

palindromo(variable);