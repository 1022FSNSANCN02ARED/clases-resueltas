const myFruits = [
  "banana",
  "apple",
  "pear",
  "peach",
  "pineapple",
  "strawberry",
];

const randomNumber = Math.random(); //(0 a 1]

const miIndiceInicial = 0;
const miValorInicial = myFruits[0];

const miIndiceFinal = myFruits.length - 1;
const miValorFinal = myFruits[miIndiceFinal]; //[0,miIndiceFinal]

const miIndiceAleatorio = Math.floor(randomNumber * miIndiceFinal);

console.log(myFruits[miIndiceAleatorio]);
