
function agregarElemento() {
    var elemento = document.createElement('li');
    var contenido = document.createTextNode(prompt('Escribe lo que deseas agregar a la lista: '));

    elemento.appendChild(contenido);

    var lista = document.getElementById('lista');
    lista.appendChild(elemento);

}