const { body } = require("express-validator");

module.exports = [
  body("title").notEmpty().isLength({ min: 3 }),
  body("release-date").notEmpty().isDate(),
];
