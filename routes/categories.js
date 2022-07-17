var express = require('express');
var router = express.Router();

const CategoriesController = require('../controllers/categories');

router.use('/', CategoriesController);

module.exports = router;
