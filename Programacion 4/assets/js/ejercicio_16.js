
function soloLetras(target, event) {

    console.log(event.keyCode);

    if (event.keyCode >= 97 && event.keyCode <= 122 || event.keyCode >= 65 && event.keyCode <= 90) {
        return true;
    } else {
        return false;
    }

}