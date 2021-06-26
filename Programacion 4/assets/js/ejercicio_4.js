var valores = [true, 5, false, "hola", "adios", 2];

if (valores[3] > valores[4]) {
   alert(valores[3] + " Es mayor a " + valores[4]); 
} else { 
    alert(valores[4] + " Es mayor a" + valores[3]);
}

if (valores[0] == valores[2]) {
    alert("true");
} else {
    alert("false");
}

alert("Suma: " + (valores[1] + valores[5]));
alert("Resta: " + (valores[1] - valores[5]));
alert("Multiplicacion: " + (valores[1] * valores[5]));
alert("Division: " + (valores[1] / valores[5]));
alert("Mod: " + (valores[1] % valores[5]));