var express = require('express');
var router = express.Router();
const { User } = require('../models');
const ValidateUserId = require('../routes/middlewares/validateUserId');

router.get('/', async (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(users => res.send(users))
    .catch(err => res.status(400).send(err));
});

router.delete('/', async (req, res) => {
  User.destroy({ where: { id: req.query.userId } })
    .then(() => res.send({ success: 'El usuario se ha eliminado' }))
    .catch(err => res.status(400).send(err));
});

module.exports = router;