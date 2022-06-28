const jwt = require('jsonwebtoken');
const config = require('../../config/config').development;
const { User } = require("../../models/index");


const AdminAuth = (req, res, next) => {
    console.log(req.headers);
    const token = req.headers.authorization;
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token.replace("Bearer ", ""), config.secret, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        console.log(decoded.id)
        User.findByPk(decoded.id)
            .then(user => {
                if (!user || user.roleId !== 1) return res.status(401).send({ auth: false, message: 'Unauthorized' })
                next();
            })
            .catch(err => console.log(err))
    });
}

module.exports = AdminAuth