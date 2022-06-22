var express = require('express');
var router = express.Router();
const Model = require("../models/index");
const { check } = require("express-validator");
const bcrypt = require("bcrypt");
const { createUser } = require('../controllers/users.controllers');
const userValidationSchema = require('../validations/userValidationSchema')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Create a new user
router.post('/auth/register', userValidationSchema, createUser)

module.exports = router;
