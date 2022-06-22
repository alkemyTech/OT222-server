const jwt = require('jsonwebtoken');
const config = require('../../config/config');

const SECRET_KEY = config.development.secret;

const ValidateToken = (req, res, next) => {
  const header = req.headers.authorization;
  const token = header.replace('Bearer ', '');
  const payload = jwt.verify(token, SECRET_KEY);
  if (!!payload) {
    next();
  } else {
    return res.send('Validation failed!');
  }
};

module.exports = ValidateToken;
