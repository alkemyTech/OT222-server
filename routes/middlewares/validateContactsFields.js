const { check } = require('express-validator');
const { validation } = require('../../util/helper');

const validateContactsFields = [
  check('name', 'The name cannot be empty')
    .not()
    .isEmpty()
    .isString(),
  check('email', 'The email cannot be empty')
    .not()
    .isEmpty()
    .isString(),
  (req, res, next) => {
    validation(req, res, next);
  },
];

module.exports = validateContactsFields;