function visibleOculta(content, enlace) {
    if (content.style.display == 'none') {
        content.style.display = 'block';
        enlace.innerHTML = 'Ocultar Contenido';
    } else {
        content.style.display = 'none';
        enlace.innerHTML = "Mostrar Contenido";
    }
}