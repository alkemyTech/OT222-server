var express = require('express');
var router = express.Router();


const { getAllUsers, deleteUser } = require('../controllers/users');
const AdminAuth = require('./middlewares/AdminAuth');

/* GET users listing. */

router.get('/', AdminAuth, getAllUsers);
router.delete('/:userId', AdminAuth, deleteUser);

module.exports = router;