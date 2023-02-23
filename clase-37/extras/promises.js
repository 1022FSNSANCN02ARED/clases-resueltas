function myAsyncTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Date.now());
    }, 10 * 1000);
  });
}

console.log("Empiezo mi tarea asincrónica: " + Date.now());
const miPromesa = myAsyncTask();
console.log("Ya largue mi tarea asincronica... todavia no termino (1)");
miPromesa.then((valor) => {
  console.log("Terminó mi tarea: " + valor);
});
console.log("Ya largue mi tarea asincronica... todavia no termino (2)");
