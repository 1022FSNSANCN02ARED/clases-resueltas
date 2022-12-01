const fs = require("fs");

function importarBicicletas() {
  //leer el archivo "bicicletas.json" del sistema de archivos (fs.readFileSync)
  // guardarme los contenidos en una variable 'archivoJson' (string)
  const archivoJson = fs.readFileSync("./bicicletas.json", "utf-8");
  //parseo el json a un array y lo guardo en la variable 'bicicletas'
  const bicicletas = JSON.parse(archivoJson);
  //retorno bicicletas
  return bicicletas;
}

module.exports = importarBicicletas;
