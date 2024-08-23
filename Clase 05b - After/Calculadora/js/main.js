let numero1 = parseFloat(prompt("Ingresá el primer número"));
let numero2 = parseFloat(prompt("Ingresá el segundo número"));
let operacion = prompt("Seleccioná una operación:\n+ Suma\n- Resta\n* Multiplicación\n/ División");

function calcular(num1, num2, cuenta) {
    switch (cuenta) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "No se puede dividir por cero";
            } else {
                return num1 / num2;
            }
        default:
            return "Operación inválida";
    }
}

let resultado = calcular(numero1, numero2, operacion);
alert(numero1 + " " + operacion + " " + numero2 + " = " + resultado);