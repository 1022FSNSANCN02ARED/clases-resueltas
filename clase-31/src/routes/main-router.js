const { Router } = require("express");
const mainController = require("../controllers/main-controller");

const router = Router();
module.exports = router;

router.get("/", mainController.home);
