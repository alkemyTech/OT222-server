const { check } = require('express-validator');
const { validation } = require('../../util/helper');

const validateTestimonialFields = [
  check('name', 'The name cannot be empty, and must be letters')
    .not()
    .isEmpty()
    .isString(),
  check('content', 'The content cannot be empty, and must be letters')
    .not()
    .isEmpty()
    .isString(),
  (req, res, next) => {
    validation(req, res, next);
  },
];

module.exports = validateTestimonialFields;
