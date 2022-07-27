const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { createUser, authMe, logIn, editUser } = require('../controllers/auth.controllers');
const userValidationSchema = require('../validations/userValidationSchema');

// auth me
router.get('/me', authMe);

// Create a new user
router.post('/register', userValidationSchema, createUser);
router.post('/edit/:userId', editUser)

// login user
router.post(
  '/login',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  logIn
);

module.exports = router;
