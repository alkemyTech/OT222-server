const router = require('express').Router();

const testimonialsControllers = require('../controllers/testimonials');

router.use('/', testimonialsControllers);
router.use('/:id', testimonialsControllers);

module.exports = router;
