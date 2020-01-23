const jwt = require('jsonwebtoken');
// eslint-disable-next-line import/no-unresolved
const config = require('../config/default.json');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, config.auth.key, (err, decoded) => {
    req.decoded = decoded;
    return next();
  });
};
