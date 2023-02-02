const express = require("express");
const path = require("path");
const miMiddleware = require("./middlewares/mi-middleware");
const mainRouter = require("./routes/main-router");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded());
app.use(miMiddleware);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", mainRouter);

const PORT = process.env.PORT ?? 3001;
app.listen(PORT);
