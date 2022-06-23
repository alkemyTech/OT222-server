const jwt = require('jsonwebtoken');
const config = require('../config/config');

const GenerateToken = userData => {
  const token = jwt.sign(userData, config.development.secret, {
    expiresIn: 60 * 60 * 24,
  });

  return token;
};

module.exports = GenerateToken;
