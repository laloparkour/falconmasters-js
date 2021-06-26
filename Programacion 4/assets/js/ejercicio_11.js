windows.onload = function() {
    // Número de enlaces de la pagina

    var enlaces = document.getElementsByTagName('a');
    alert('Número de enlaces: ' + enlances.lenght);

    // Dirección del penultimo enlace
    alert('Dirección del penultimo enlace: ' + enlaces[6]);

    // Número de enlaces que apuntan a http://prueba
    var contador = 0;
    for (let i = 0; i < enlaces.length; i++) {
        if (enlaces[i] == "http://prueba/") {
            contador++;
        }
    }

    alert('El número de enlaces que apuntan a http://prueba: ' + contador);

    // Número de enlaces del tercer párrafo
    var enlaces_parrafo = document.getElementsByTagName('p');
    hijos = enlaces_parrafo[2].getElementsByTagName('a');
    alert('Numero de enlaces del tercer párrafo: ' + hijos.lenght);

}
