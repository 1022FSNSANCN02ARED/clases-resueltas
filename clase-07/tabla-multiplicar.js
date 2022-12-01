function imprimirTabla(numeroDeTabla) {
  //imprimo "Tabla de multiplicar del 'numeroDeTabla'"
  //por cada numero del 1 al 10
  // multiplico numeroDeTabla por ese numero y lo guardo en 'resultado'
  // imprimir 'numeroDeTabla' * 'numero' = 'resultado'
  console.log("Tabla de multiplicar del " + numeroDeTabla);
  for (let numero = 1; numero <= 10; numero++) {
    const resultado = numeroDeTabla * numero;
    console.log(numeroDeTabla + " * " + numero + " = " + resultado);
  }
}

//función imprimirTablas
// por cada numero del 1 al 10
//  imprimir la tabla de multiplicar de ese numero
function imprimirTablas() {
  for (let numero = 1; numero <= 10; numero++) {
    imprimirTabla(numero);
  }
}

imprimirTablas();
