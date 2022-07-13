var express = require("express")
var router = express.Router()
const { Organization } = require("../models")

const getPublic = async (req, res) => {
  Organization.findAll()
    .then((organizations) => res.send(organizations))
    .catch((err) => res.status(400).send(err))
}

module.exports = {
  getPublic,
}
