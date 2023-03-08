const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const mainRouter = require("./routes/index");
const dayjs = require("dayjs");
const app = express();

app.locals = {
  formatDate: (date) => {
    if (!date) return "";
    return dayjs(date).format("YYYY-MM-DD");
  },
};

// view engine setup
app.set("views", path.resolve(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "../public")));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.use(mainRouter);

app.listen("3001", () => console.log("Servidor corriendo en el puerto 3001"));
