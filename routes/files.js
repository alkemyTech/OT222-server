const express = require('express');
const router = express.Router();

const AdminAuth = require('./middlewares/AdminAuth');
const filesController = require('../controllers/files');


router.use('/', filesController)

module.exports = router;