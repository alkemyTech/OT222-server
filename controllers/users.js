var express = require('express');
var router = express.Router();
const { Users } = require('../models');
const ValidateUserId = require('../routes/middlewares/validateUserId');

router.get('/', async (req, res) => {
  const users = await Users.findAll();
  res.json(users);
});

router.delete('/:userId', ValidateUserId, async (req, res) => {
  await Users.destroy({ where: { id: req.params.userId } });
  res.json({ success: 'El usuario se ha eliminado' });
});

module.exports = router;
