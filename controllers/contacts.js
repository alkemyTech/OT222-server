var express = require('express');
var router = express.Router();
//const { Contacts } = require('../models');
const AdminAuth = require('../routes/middlewares/adminAuth');

router.get('/',AdminAuth, async (req, res) => {
 /* await  Contacts.findAll()
    .then(contacts => res.send(contacts))
    .catch(err => res.status(400).send(err)); */
});




module.exports = router;