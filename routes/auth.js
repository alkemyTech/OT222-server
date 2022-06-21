const router = require('express').Router();
const { User } = require('../models/index');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

router.post('/login',
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    (req, res) => {
        if (!validationResult(req).isEmpty()) return res.status(401).json({ ok: false });

        const { email, password } = req.body;
        User.findOne({
            where: { email }
        }).then(user => {
            if (!user) return res.status(401).json({ ok: false });
            if (!bcrypt.compareSync(password, user.password)) return res.status(401).json({ ok: false });
            return res.json({ ok: true, user });
        })

    })

module.exports = router;