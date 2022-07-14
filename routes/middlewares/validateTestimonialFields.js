const { check } = require('express-validator');
const { validation } = require('../../util/helper');

const validateTestimonialFields = [
  check('name', 'El nombre no puede estar vacío, y debe ser letras.')
    .not()
    .isEmpty()
    .isString(),
  check('content', 'El contenido no puede estar vacío, y debe ser letras.')
    .not()
    .isEmpty()
    .isString(),
  (req, res, next) => {
    validation(req, res, next);
  },
];

module.exports = validateTestimonialFields;
