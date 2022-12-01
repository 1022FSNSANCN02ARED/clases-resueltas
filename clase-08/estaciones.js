/*Para ayudar a la empresa escribamos una función reporteDePasajeros(), la cual cuando reciba la cantidad de estaciones que avanzó el tren nos devuelva un reporte de la cantidad de cada una de las estaciones y la cantidad de pasajeros que lleva el tren. La empresa nos provee los siguientes datos: El tren sale de la estación terminal siempre con 200 pasajeros. En cada estación el tren sube 50 pasajeros y se bajan 30. En la estación Florida (la estación número 5), como es una estación central es la única donde bajan 80 personas y suben 120. Teniendo éstos datos ya podemos armar nuestro programa, del cual nos pasan los siguientes ejemplos:
 */

const resultadoEj5 = [
  "En la estación 0 hay 200 pasajeros arriba del tren",
  "En la estación 1 hay 220 pasajeros arriba del tren",
  "En la estación 2 hay 240 pasajeros arriba del tren",
  "En la estación 3 hay 260 pasajeros arriba del tren",
  "En la estación 4 hay 280 pasajeros arriba del tren",
  "En la estación 5 hay 320 pasajeros arriba del tren",
];
//Esta función devuelve un array con cada valor para cada estación
function reporteDePasajeros(estacionFinal) {
  //"estacionFinal" es un numero
  //necesito una array para acumular estos resultados se llamará "informes"
  //arrancamos con 200 pasajeros. vamos a guardarlo en una variable
  const informes = [];
  let pasajeros = 200;
  //por cada estacion desde 0 hasta "estacionFinal"
  for (let estacion = 0; estacion <= estacionFinal; estacion++) {
    // si la estacion es la 0
    //  no se suma nada
    // Si la estacion es la 5
    //  pasajeros suman 40
    // Si es cualquier otra estacion
    //  pasajeros suman suman 20
    switch (estacion) {
      case 0:
        break;
      case 5:
        pasajeros += 120;
        pasajeros -= 80;
        break;
      default:
        pasajeros += 50;
        pasajeros -= 30;
    }
    informes.push(
      "En la estación " +
        estacion +
        " hay " +
        pasajeros +
        " pasajeros arriba del tren"
    );
  }
  return informes;
}
