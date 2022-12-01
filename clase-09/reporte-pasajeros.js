function reporteDePasajeros(estaciones) {
  let resultado = [];

  for (let i = 0; i <= estaciones; i++) {
    let pasajeros;
    if (estaciones >= 0 && estaciones < 5) {
      pasajeros = 200 + i * 20;
    } else {
      pasajeros = 200 + i * 20 + 20;
    }
    resultado.push(
      "En la estación: " +
        i +
        " hay " +
        pasajeros +
        " pasajeros arriba del tren"
    );
  }
  return resultado;
}
console.log(reporteDePasajeros(5));
