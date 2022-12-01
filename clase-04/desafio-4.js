const valor1 = 5;
const valor2 = 5;
const operador = "-";

let resultado = null;
switch (operador) {
  case "+": {
    resultado = valor1 + valor2;
    break;
  }
  case "-": {
    resultado = valor1 - valor2;
    break;
  }
  case "*": {
    resultado = valor1 * valor2;
    break;
  }
  case "/": {
    resultado = valor1 / valor2;
    break;
  }
  default: {
    console.log("Las operaciones aceptadas son: +, -, *, /");
  }
}

if (resultado != null) {
  console.log(
    "El resultado de " + valor1 + operador + valor2 + "=" + resultado
  );
}
