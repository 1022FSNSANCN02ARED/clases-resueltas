const uuid = require("uuid");

const perro = {
  id: uuid.v4(),
  nombre: "Pepito",
  colores: ["Marron", "Verde"],
  raza: undefined,
  edad: 3,
  peso: 50,
  saludar: function () {
    console.log(this);
  },
};

module.exports = perro;
