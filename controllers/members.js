const router = require('express').Router()
const { Members } = require('../models')

const getAllMembers = (req, res) => {
    Members.findAll()
        .then(members => res.send(members))
        .catch(err => res.send(err))
}

const addMember = (req, res) => {
    const { name, image } = req.body

    if (!name) return res.status(400).send({ msg: 'Name is required' })
    if (typeof name !== 'string') return res.status(400).send({ msg: 'Name must be a string' })

    Members.create({ name, image })
        .then(member => res.status(201).send({ msg: "Member created", member }))
        .catch(err => res.send(err))
}

const editMember = (req, res) => {
    const { id } = req.params
    const { name, image } = req.body

    if (!name && !image) return res.status(400).send({ msg: 'Name or image is required' })
    if (typeof name !== 'string') return res.status(400).send({ msg: 'Name must be a string' })
    if (typeof image !== 'string') return res.status(400).send({ msg: 'Image must be a string' })

    Members.findByPk(id)
        .then(member => {
            if (!member) return res.status(404).send({ msg: 'Member not found' })
            member.update({ name, image })
                .then(member => res.status(201).send(member))
                .catch(err => res.send(err))
        }).catch(err => res.send(err))
}

const deleteMember = (req, res) => {
    const { id } = req.params

    Members.findByPk(id)
        .then(member => {
            if (!member) return res.status(404).send({ msg: 'Member not found' })
            member.destroy()
                .then(member => res.status(201).send({ msg: 'Member deleted', member }))
                .catch(err => res.send(err))
        }).catch(err => res.send(err))

}

module.exports = {
    getAllMembers,
    addMember,
    editMember,
    deleteMember
}