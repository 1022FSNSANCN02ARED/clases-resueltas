const express = require("express");
const genresController = require("../../controllers/api/genresController.js");
const router = express.Router();

// /api/genres
router.get("/", genresController.list);
router.get("/:id", genresController.detail);

router.post("/", genresController.create);
module.exports = router;
