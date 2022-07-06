var express = require('express');
var router = express.Router();

const ContactController = require('../controllers/contacts');
const AdminAuth = require('./middlewares/AdminAuth');

/* GET contacts listing. */

router.use('/', AdminAuth, ContactController);

module.exports = router;