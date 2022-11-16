const autosImportados = require("./autos");

const concesionaria = {
  autos: autosImportados,
  buscarAuto: function (patente) {
    // crear la funcionalidad buscarAuto que reciba por parámetro la patente y devuelva el auto al cual le corresponde. En caso de no encontrar el mismo, deberá retornar null.
    // recibo un parámetro: "patente" -> 'string'
    // this.autos -> array de objetos "Auto"
    // recorremos this.autos, por cada elemento 'miAuto'
    for (let i = 0; i < this.autos.length; i++) {
      const miAuto = this.autos[i];
      // si ('patente' es igual 'miAuto.patente')
      //    devolver 'miAuto'
      if (patente == miAuto.patente) {
        return miAuto;
      }
    }
    // si terminé de recorrer el array,
    //    devolver null
    return null;
  },
};
