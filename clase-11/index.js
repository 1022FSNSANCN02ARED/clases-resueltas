const importar = require("./collectibles")

const hotToys = importar("Hot Toys")
const bandai = importar("Bandai")

const todosLosCollectibles = [...hotToys, ...bandai]

const collectibles = {
  figures: todosLosCollectibles,
  listFigures: function (){
    
  }
};