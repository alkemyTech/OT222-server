const {check} = require('express-validator')

const userValidationSchema = [
    check("firstName")
      .isLength({ min: 3, max: 15 })
      .withMessage("First name is required")
      .withMessage("First name must be between 3 and 15 characters"),
    check("lastName")
      .isLength({ min: 3, max: 15 })
      .withMessage("Last name is required")
      .withMessage("Last name must be between 3 and 15 characters"),
    check("email").isEmail().withMessage("Email is required"),
    check("password")
      .isLength({ min: 8, max: 15 })
      .withMessage("Password is required")
      .withMessage("Password must be between 8 and 15 characters"),
  ];

module.exports = userValidationSchema; 