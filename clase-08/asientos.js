/*
Nos piden que escribamos la función asientosDisponibles(), que tome como parámetro un conjunto de asientos disponibles y el asiento que quiere ocupar la persona. Nuestra función deberá verificar si el asiento solicitado se encuentra disponible y devolverle un mensaje claro y prolijo al cliente como en los ejemplos siguientes
*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function asientosDisponibles(disponibles, asiento) {
  //revisar la lista de "disponibles" y verificar si el asiento que queremos está en esa lista
  // "disponibles" en un array de números
  // "asiento" es un numero

  // recorrer el array "disponibles" y por cada elemento en el array
  for (let i = 0; i < disponibles.length; i++) {
    const elemento = disponibles[i];
    //    si asiento es igual a elemento
    if (elemento == asiento) {
      //         encontré el asiento disponible
      return "encontré el asiento";
    }
  }
  // si no encontré el asiento
  //    el asiento no está disponible
  return "no lo encontré";
}
