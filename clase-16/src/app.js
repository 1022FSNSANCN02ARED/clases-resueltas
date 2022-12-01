const path = require("path");

const express = require("express");
const app = express();

const rutaAPublic = path.join(__dirname, "../public");
const static = express.static(rutaAPublic);
app.use(static);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/lovelace", (req, res) => {
  res.sendFile(path.join(__dirname, "views/lovelace.html"));
});

app.listen(3001, () => {
  console.log("El servidor prendió");
});
