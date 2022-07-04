const { check } = require("express-validator");

const newValidationSchema = [
  check("name").notEmpty().withMessage("Can't be empty"),
  check("content").notEmpty().withMessage("Can't be empty"),
  check("image").notEmpty().withMessage("Can't be empty"),
  check("categoryId").notEmpty().withMessage("Can't be empty"),
];

module.exports = newValidationSchema;
