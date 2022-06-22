var express = require('express');
var router = express.Router();

const {getPublic}  =require("../controllers/organizations");

router.get("/1/public",getPublic);


module.exports = router