const importarBicis = require("./datos-bici");

const dhBici = {
  bicicletas: importarBicis(),
  buscarBici: function (id) {
    // "id" es un number
    // buscar la bicicleta que tenga el mismo id que "id"
    // guardar lo encontrado en la variable 'bicicleta'
    const bicicletasFiltradas = this.bicicletas.filter((miBici) => {
      return miBici.id == id;
    });
    // si encontré la bicicleta, retornarla encontrada
    if (bicicletasFiltradas.length > 0) {
      return bicicletasFiltradas[0];
    }
    // si no encontré la bicicleta, retornar null
    else {
      return null;
    }
  },
  venderBici: function (id) {
    //"id" es numero
    //buscar una bici en base al id (usando this.buscarBici)
    // guardarla en una variable 'bici'
    const bici = this.buscarBici(id);
    //si la bici existe
    if (bici) {
      //  poner la propiedad bici.vendida en true
      bici.vendida = true;
      //  retornar la bici
      return bici;
    }
    //sino
    else {
      //  retornar "Bicicleta no encontrada"
      return "Bicicleta no encontrada";
    }
  },
};

console.log(dhBici.venderBici(15));
