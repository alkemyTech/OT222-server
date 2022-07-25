const { check } = require("express-validator");

const userValidationSchema = [
  check("firstName")
    .not().isEmpty()
    .withMessage("First name is required")
    .isLength({ min: 3, max: 15 })
    .withMessage("First name must be between 3 and 15 characters"),
  check("lastName")
    .not().isEmpty()
    .withMessage("Last name is required")
    .isLength({ min: 3, max: 15 })
    .withMessage("Last name must be between 3 and 15 characters"),
  check("email")
    .not().isEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be a valid email address"),
  check("password")
    .not().isEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8, max: 15 })
    .withMessage("Password must be between 8 and 15 characters"),
];

module.exports = userValidationSchema;
