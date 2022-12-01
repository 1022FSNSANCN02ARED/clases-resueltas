function calcular(valorA, valorB, operacion) {
  return operacion(valorA, valorB);
}

function sumar(valorA, valorB) {
  return valorA + valorB;
}
const restar = (valorA, valorB) => {
  return valorA - valorB;
};

calcular(5, 10, sumar);
calcular(5, 10, restar);
