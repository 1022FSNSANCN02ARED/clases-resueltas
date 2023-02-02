const path = require("path");
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const mainRouter = require("./routers/main-router");

const app = express();
app.listen(3000);

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(
    session({
        secret: "los gatitos son lo mejor",
    })
);

app.use(mainRouter);
