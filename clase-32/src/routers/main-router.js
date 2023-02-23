const { Router, urlencoded } = require("express");
const mainController = require("../controllers/main-controller");
const userGuard = require("../middlewares/user-guard");
const validateForm = require("../middlewares/validate-form");
const validations = require("../validations/login");

const router = Router();

router.get("/", userGuard, mainController.home);

router.get("/login", mainController.showLogin);
router.post(
    "/login",
    urlencoded({
        extended: false,
    }),
    validations,
    validateForm,
    mainController.login
);

module.exports = router;
