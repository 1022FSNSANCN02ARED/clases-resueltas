// ************ Require's ************
const path = require("path");
const express = require("express");
const router = express.Router();

const multer = require("multer");
const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/images/products"),
    filename: (req, file, cb) => {
        cb(null, "image-" + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage,
});

// ************ Controller Require ************
const productsController = require("../controllers/productsController");

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.index);

/*** CREATE ONE PRODUCT ***/
router.get("/create", productsController.create);
router.post("/", upload.single("image"), productsController.store);

/*** GET ONE PRODUCT ***/
router.get("/:id", productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get("/:id/edit", productsController.edit);
router.put("/:id", productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete("/:id", productsController.destroy);

router.delete("/:id/:imageIndex", productsController.destroyImage);

module.exports = router;
