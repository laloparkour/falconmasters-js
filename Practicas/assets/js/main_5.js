/* 
    Escribe un prorgama que pueda calcular el area de 3 figuras geométricas, triángulo, rectángulo y círculo.
    En primer lugar pregunta de que figura se quiere calcular el área, solicita los datos que necesitas para calcularlo.
    
        triángulo = b * h / 2
        rectángulo = b * h
        círculo = PI * r2 (pi * radio al cuadrado) 
*/

let figure = prompt('Introduce la figura de la que quieres calcular el area, triangulo, rectangulo, circulo: ');

let base;
let altura;
let area;
let radio;
const PI = 3.1416;

switch (figure) {

    case 'triangulo':
        base = parseInt(prompt('Introduce la base: '));
        altura = parseInt(prompt('Introduce la altura: '));

        area = base * (altura/2);

        alert(`El area del triangulo es ${area}`);

        break;
    case 'rectangulo':
        base = parseInt(prompt('Introduce la base: '));
        altura = parseInt(prompt('Introduce la altura: '));

        area = base * altura;

        alert(`El area del triangulo es ${area}`);

        break;
    case 'circulo':
        radio = parseInt(prompt('Introduce el radio: '));

        area = PI * (Math.pow(radio, 2));

        alert(`El area del circulo es ${area}`);

        break;
    default:
        alert('Figura invalida');
        break;
}
