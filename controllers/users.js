var express = require('express');
const { User } = require('../models');


const getAllUsers = async (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(users => res.send(users))
    .catch(err => res.status(400).send(err));
}

const deleteUser = async (req, res) => {
  User.destroy({ where: { id: req.params.userId } })
    .then(n => {
      if (n) return res.send({ success: 'User deleted' })
      return res.status(400).send({ error: 'User not found' })
    })
    .catch(err => res.status(500).send(err));
}

module.exports = {
  getAllUsers,
  deleteUser
};