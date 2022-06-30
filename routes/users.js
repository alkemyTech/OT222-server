var express = require('express');
var router = express.Router();

const usersControllers = require('../controllers/users');

router.use('/', usersControllers);

module.exports = router;
