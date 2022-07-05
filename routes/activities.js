var express = require('express');
var router = express.Router();

const ActivitiesController = require('../controllers/activities');
const AdminAuth = require('./middlewares/AdminAuth');

/* POST activities listing. */

router.use('/', ActivitiesController);

module.exports = router;