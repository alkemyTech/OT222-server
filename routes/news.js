const express = require('express');
const router = express.Router();
const { Entries } = require('../models/index')

router.get('/', (req, res) => {
    Entries.findAll({
        where: { type: 'news' },
        attributes: ['name', 'image', 'createdAt']
    })
        .then(entries => res.send(entries))
        .catch(err => res.send(err))
})

module.exports = router;