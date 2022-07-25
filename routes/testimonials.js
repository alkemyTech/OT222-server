const express = require('express');
const testimonialsRouter = express.Router();
const validateTestimonialFields = require('./middlewares/validateTestimonialFields');
const validateTestimonialId = require('./middlewares/ValidateTestimonialId');
const AdminAuth = require('./middlewares/AdminAuth');

const TestimonialsController = require('../controllers/testimonials');

testimonialsRouter.get('/', TestimonialsController.getTestimonials);
testimonialsRouter.get(
  '/:id',
  validateTestimonialId,
  TestimonialsController.getTestimonialsById
);
testimonialsRouter.post(
  '/',
  validateTestimonialFields,
  TestimonialsController.createTestimonials
);
testimonialsRouter.put(
  '/:id',
  validateTestimonialId,
  AdminAuth,
  TestimonialsController.editTestimonialsById
);
testimonialsRouter.delete(
  '/:id',
  validateTestimonialId,
  AdminAuth,
  TestimonialsController.deleteTestimonialsById
);

module.exports = testimonialsRouter;
