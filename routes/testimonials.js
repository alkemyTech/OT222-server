const router = require('express').Router();

const testimonialsControllers = require('../controllers/testimonials');

router.use('/', testimonialsControllers);

module.exports = router;
