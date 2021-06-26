
function limitador(e, target) {
    var cadena = target.value;

    console.log(cadena);

    if (cadena.length <= 99 || e.keyCode == 8) {
        document.getElementById("t_contador").innerHTML="Te quedan: " + (99-cadena.length) + " caracteres";
        return true;
    } else {
        return false;
    }

}