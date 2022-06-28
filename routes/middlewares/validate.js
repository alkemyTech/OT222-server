const config = require('../../config/config');
const jwt = require('jsonwebtoken');

const validateToken = (token) => {
    const decoded = jwt.verify(token, config.development.secret)
    return decoded
}

module.exports = validateToken