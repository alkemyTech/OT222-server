var express = require('express');
var router = express.Router();


const { getAllUsers, deleteUser, editUser } = require('../controllers/users');
const AdminAuth = require('./middlewares/AdminAuth');

/* GET users listing. */

router.get('/', AdminAuth, getAllUsers);
router.post('/:userId', AdminAuth, editUser);
router.delete('/:userId', AdminAuth, deleteUser);

module.exports = router;