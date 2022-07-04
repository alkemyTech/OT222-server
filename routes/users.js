var express = require('express');
var router = express.Router();

const { getUser }  = require("../controllers/user.controllers");

/* GET users listing. */
router.get("/",getUser);



module.exports = router;
