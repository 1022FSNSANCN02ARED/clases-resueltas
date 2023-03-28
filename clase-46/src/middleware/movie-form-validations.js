const { body } = require("express-validator");

module.exports = [
  body("title")
    .isLength({ min: 3 })
    .withMessage("El campo titulo debe contener al menos tres caracteres"),
  body("release-date")
    .isDate()
    .withMessage("El campo fecha de lanzamiento debe ser una fecha válida"),
];
