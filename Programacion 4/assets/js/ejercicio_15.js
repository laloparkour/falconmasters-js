
function muestraInformacion(event) {

    var informacion = document.getElementById('info');

    if (event.type == "mousemove") {
        informacion.innerHTML = "<h1>Mouse</h1><p>Navegador ["+event.screenX+"] ["+event.screenY+"]</p>"+"<p>Pagina ["+event.screenX+"] ["+event.screenY+"]</p>";
        informacion.style.backgroundColor = "white";
    } else if (event.type == "keypress") {
        informacion.innerHTML="<h1>Teclado</h1><p>Caracter ["+event.key+"]</p>"+"<p>Codigo ["+event.keyCode+"]</p>";
        informacion.style.backgroundColor="#CCE6FF";
    } else if (event.type == "mousedown") {
        informacion.innerHTML="<h1>Mouse</h1><p>Navegador ["+event.screenX+"] ["+event.screenY+"]</p>"+"<p>Pagina ["+event.pageX+"]["+event.pageY+"]</p>";
        informacion.style.backgroundColor="#FFFFCC";
    }
}