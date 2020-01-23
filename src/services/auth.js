const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// eslint-disable-next-line import/no-unresolved
const config = require('../config/default.json');

class Auth {
  constructor(User) {
    this.User = User;
  }

  async authenticate(data) {
    const user = await this.User.findOne({ username: data.username });

    if (!user || !(await bcrypt.compare(data.password, user.password))) {
      return false;
    }
    return user;
  }

  static generateToken(payload) {
    return jwt.sign(payload, config.auth.key, {
      expiresIn: config.auth.tokenExpiresIn,
    });
  }
}

module.exports = Auth;
