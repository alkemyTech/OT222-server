const router = require('express').Router()
const { getAllMembers, addMember, editMember, deleteMember } = require('../controllers/members')
const AdminAuth = require('./middlewares/AdminAuth')


router.get('/', getAllMembers)

router.post('/', AdminAuth, addMember)

router.put('/:id', AdminAuth, editMember)

router.delete('/:id', AdminAuth, deleteMember)

module.exports = router