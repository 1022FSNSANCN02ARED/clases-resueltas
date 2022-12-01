const verduleria = {
  frutas: [
    {
      nombre: "banana",
      peso: 5,
    },
    {
      nombre: "manzana",
      peso: 10,
    },
    {
      nombre: "pera",
      peso: 15,
    },
  ],
  obtenerNombresDeFrutas: function () {
    return this.frutas.map(function (miFruta) {
      return miFruta.nombre;
    });
  },
  obtenerPesoTotal: function () {
    // const miCallback = (resultado, miFruta) => {
    //   resultado[miFruta.nombre] = miFruta.peso;
    //   return resultado;
    // };
    return this.frutas.reduce((resultado, miFruta) => {
      return resultado + miFruta.peso;
    });
  },
};

const resultado = {
  banana: 5,
  manzana: 10,
  pera: 15,
};

resultado.banana;
resultado["banana"];

console.log(verduleria.obtenerNombresDeFrutas());
