const jwt = require('jsonwebtoken');
const config = require('../../config/config').development;
const { User } = require("../../models/index");


const AdminAuth = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token.replace("Bearer ", ""), config.secret, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        User.findByPk(decoded.userId, {
            attributes: ["roleId"]
        })
            .then(user => {
                if (!user || user.roleId !== 1) return res.status(401).send({ auth: false, message: 'Unauthorized' })
                next();
            })
            .catch(err => console.log(err))
    });
}

module.exports = AdminAuth