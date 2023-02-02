const { Router } = require("express");
const miMiddleware = require("../middlewares/mi-middleware");
const mainController = require("../controllers/main-controller");

const router = Router();
module.exports = router;

router.get("/", miMiddleware, mainController.home);
