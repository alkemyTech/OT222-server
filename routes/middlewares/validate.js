const config = require('../../config/config');
const jwt = require('jsonwebtoken');

const validateToken = (token) => {
    try {
        token = token.replace('Bearer ', '');
        const decoded = jwt.verify(token, config.development.secret)
        return decoded
    } catch (err) {
        console.log(err)
        return false
    }
}

module.exports = validateToken