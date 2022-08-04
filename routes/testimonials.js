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

/**
 * @swagger
 * tags:
 *   name: Testimonials
 *   description: User Testimonials
 */

/**
 * @swagger
 * /testimonials:
 *   get:
 *     summary: Get a list of testimonials.
 *     tags: [Testimonials]
 *     responses:
 *       "200":
 *         description: Successfully done!
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               properties:
 *                 name:
 *                 type: string
 *               image:
 *                 type: string
 *               content:
 *                 type: string
 *             example:
 *               name: Jose Perez
 *               image: jose.jpg
 *               content:  This is my testimony.
 *       "500":
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: false
 */

/**
 * @swagger
 * /testimonials/{id}:
 *   get:
 *     summary: Get a single testimonial from the list.
 *     tags: [Testimonials]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The testimonial id
 *     responses:
 *       "200":
 *         description: Successfully done!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                 type: string
 *               image:
 *                 type: string
 *               content:
 *                 type: string
 *             example:
 *               name: Jose Perez
 *               image: jose.jpg
 *               content:  This is my testimony.
 *       "404":
 *          description: Testimonial not found!
 *       "500":
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: false
 */

/**
 * @swagger
 * /testimonials:
 *   post:
 *     summary: Create a new testimonial
 *     tags: [Testimonials]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               image:
 *                 type: string
 *               content:
 *                 type: string
 *             example:
 *               name: Jose Perez
 *               image: jose.jpg
 *               content:  This is my testimony.
 *     responses:
 *       "200":
 *         description: Testimonial added successfully!
 *       "500":
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  ok:
 *                    type: boolean
 *                    example: false
 */

/**
 * @swagger
 * /testimonials/{id}:
 *   delete:
 *     summary: Delete a testimonial .
 *     tags: [Testimonials]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The testimonial id
 *     responses:
 *       "200":
 *         description: Testimonial deleted!
 *
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                 type: string
 *               image:
 *                 type: string
 *               content:
 *                 type: string
 *               user:
 *                 type: string
 *                 format: JWT
 *                 example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1OTU3OTU3NiwiZXhwIjoxNjU5NjY1OTc2fQ.qischHbPqZEHklxMXv0EzojaffwIZhrRltPgHDv8KEs"
 *             example:
 *               name: Jose Perez
 *               image: jose.jpg
 *               content:  This is my testimony.
 *       "404":
 *          description: Testimonial not found!
 *       "401":
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 testimonial:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "No token provided"
 *       "500":
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: false
 */

/**
 * @swagger
 * /testimonials/{id}:
 *   put:
 *     summary: Update a testimonial .
 *     tags: [Testimonials]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The testimonial id
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                 type: string
 *               image:
 *                 type: string
 *               content:
 *                 type: string
 *               user:
 *                 type: string
 *                 format: JWT
 *                 example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1OTU3OTU3NiwiZXhwIjoxNjU5NjY1OTc2fQ.qischHbPqZEHklxMXv0EzojaffwIZhrRltPgHDv8KEs"
 *             example:
 *               name: Jose Perez
 *               image: jose.jpg
 *               content:  This is my testimony.
 *     responses:
 *       "200":
 *         description: Testimonial updated!
 *       "404":
 *          description: Testimonial not found!
 *       "401":
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 testimonial:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "No token provided"
 *       "500":
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: false
 */
