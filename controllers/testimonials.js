var express = require('express');
var router = express.Router();
const { Testimonials } = require('../models');
const validateTestimonialFields = require('../routes/middlewares/validateTestimonialFields');

router.post('/', validateTestimonialFields, async (req, res) => {
  const data = await Testimonials.create(req.body);
  res.json(data);
});

module.exports = router;
