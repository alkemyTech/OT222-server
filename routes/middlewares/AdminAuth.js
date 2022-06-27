const jwt = require('jsonwebtoken');
const config = require('../../config/config').development;

const AdminAuth = (req, res, next) => {
    console.log(req.headers);
    const token = req.headers.authorization;
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    // Replace by jwt verify middleware when OT222-36 merged
    jwt.verify(token.replace("Bearer ", ""), config.secret, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        if (decoded.roleId !== 'admin') return res.status(401).send({ auth: false, message: 'Unauthorized' });
        next();
    });
}

module.exports = AdminAuth