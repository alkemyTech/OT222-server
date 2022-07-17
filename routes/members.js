const router = require('express').Router()
const membersController = require('../controllers/members')

router.use('/', membersController)

module.exports = router