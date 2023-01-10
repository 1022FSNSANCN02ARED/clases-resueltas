const path = require("path");
const express = require("express");
const mainRouter = require("./routers/main-router");

const app = express();

app.listen(3001, () => {
  console.log("Se prendió");
});

app.use(express.static(path.join(__dirname, "../public")));

app.use(mainRouter);
