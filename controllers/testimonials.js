var express = require('express');
var router = express.Router();
const { Testimonials } = require('../models');
const validateTestimonialFields = require('../routes/middlewares/validateTestimonialFields');
const validateTestimonialId = require("../routes/middlewares/ValidateTestimonialId");

router.post('/', validateTestimonialFields, async (req, res) => {
  const data = await Testimonials.create(req.body);
  res.json(data);
});

router.put('/:id', validateTestimonialFields,validateTestimonialId, async (req, res) => {
  const idParam = req.params.id;
  try {
    
    await Testimonials.update(
      {
        name: req.body.name,
        content: req.body.content,
      },
      {where:{id: idParam}
    })
    const testimonial = await Testimonials.findOne({where:{id:idParam}})
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

module.exports = router;
