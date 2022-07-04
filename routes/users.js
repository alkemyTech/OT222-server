var express = require('express');
var router = express.Router();


///const usersControllers = require('../controllers/users');

const { getUser }  = require("../controllers/user.controllers");

/* GET users listing. */
router.get("/",getUser);



router.use('/', usersControllers);

module.exports = router;
