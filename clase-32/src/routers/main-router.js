const { Router, urlencoded } = require("express");
const mainController = require("../controllers/main-controller");
const router = Router();

router.get("/login", mainController.showLogin);
router.post("/login", urlencoded(), mainController.login);

module.exports = router;
