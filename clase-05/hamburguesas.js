function calcularPrecioHamburguesa(
  tipoHamburguesa,
  jamon,
  queso,
  salsaDeTomate,
  mayonesa,
  mostaza,
  tomate,
  lechuga,
  cebolla
) {
  let total = 0;
  switch (tipoHamburguesa) {
    case "carne": {
      total = 1800;
      break;
    }
    case "pollo": {
      total = 1500;
      break;
    }
    case "veggie": {
      total = 1200;
      break;
    }
  }

  // if (jamon){
  //     total += 30
  // }

  // total += 30 * jamon

  total += jamon ? 30 : 0;
  total += queso ? 30 : 0;
  total += salsaDeTomate ? 30 : 0;
  total += mayonesa ? 30 : 0;
  total += mostaza ? 30 : 0;
  total += tomate ? 30 : 0;
  total += lechuga ? 30 : 0;
  total += cebolla ? 30 : 0;

  return total;
}

function imprimirMensaje(nombre, valor) {
  console.log("Estimado " + nombre + ", el monto total a pagar es: $" + valor);
}

imprimirMensaje(
  "Axel Riera",
  calcularPrecioHamburguesa(
    "veggie",
    true,
    true,
    false,
    false,
    true,
    false,
    true,
    false
  )
);
