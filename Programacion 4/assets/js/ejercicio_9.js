var numero = prompt("Escribe un número: ");

function par(num) {

    if (num % 2 == 0) {
        return true;
    } else {
        return false;15
    }

    
}

if (par(numero)) {
    alert("Es par");
    console.log("Es par");
} else {
    alert("Es impar");
    console.log("Es impar");
}