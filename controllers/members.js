const router = require('express').Router()
const { Members } = require('../models')

router.get('/', (req, res) => {

    Members.findAll()
        .then(members => res.send(members))
        .catch(err => res.send(err))

})

router.post('/', (req, res) => {
    const { name } = req.body

    if (!name) return res.status(400).send({ msg: 'Name is required' })
    if (typeof name !== 'string') return res.status(400).send({ msg: 'Name must be a string' })

    Members.create({ name })
        .then(member => res.send({ msg: "Member created", member }))
        .catch(err => res.send(err))
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    if (!name) return res.status(400).send({ msg: 'Name is required' })
    if (typeof name !== 'string') return res.status(400).send({ msg: 'Name must be a string' })

    Members.findByPk(id)
        .then(member => {
            if (!member) return res.status(404).send({ msg: 'Member not found' })
            member.update({ name })
                .then(member => res.send(member))
                .catch(err => res.send(err))
        }).catch(err => res.send(err))
})

router.delete('/:id', (req, res) => {
    const { id } = req.params

    Members.findByPk(id)
        .then(member => {
            if (!member) return res.status(404).send({ msg: 'Member not found' })
            member.destroy()
                .then(member => res.send({ msg: 'Member deleted', member }))
                .catch(err => res.send(err))
        }).catch(err => res.send(err))

})

module.exports = router