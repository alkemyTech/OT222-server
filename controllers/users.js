var express = require('express');
var router = express.Router();
const { User } = require('../models');


router.get('/', async (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(users => res.send(users))
    .catch(err => res.status(400).send(err));
});

router.delete('/:userId', async (req, res) => {
  User.destroy({ where: { id: req.params.userId } })
    .then(() => res.send({ success: 'El usuario se ha eliminado' }))
    .catch(err => res.status(400).send(err));
});

module.exports = router;