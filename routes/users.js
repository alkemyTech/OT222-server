var express = require('express');
var router = express.Router();


const usersControllers = require('../controllers/users');
const AdminAuth = require('./middlewares/AdminAuth');

/* GET users listing. */

router.use('/', AdminAuth, usersControllers);

module.exports = router;