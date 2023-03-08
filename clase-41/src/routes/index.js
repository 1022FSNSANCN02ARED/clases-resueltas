const express = require("express");
const router = express.Router();

const genresRouter = require("./genresRouter.js");
const moviesRouter = require("./moviesRouter.js");
const seriesRouter = require("./seriesRouter.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Digital Movies" });
});
router.use("/genres", genresRouter);
router.use("/movies", moviesRouter);
router.use("/series", seriesRouter);

module.exports = router;
