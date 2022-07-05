var express = require('express');
var router = express.Router();
//const { Contacts } = require('../models');
const AdminAuth = require('../routes/middlewares/adminAuth');

router.get('/',AdminAuth, async (req, res) => {
 /*  Contacts.findAll()
    .then(users => res.send(users))
    .catch(err => res.status(400).send(err)); */
});



module.exports = router;