/* eslint-disable func-names */
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const SALT_WORK_FACTOR = 10;

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  cpf: String,
  email: String,
  telefone: String,
  _id_empresa: { type: String, required: true },
  username: { type: String, unique: true },
  password: {
    type: String, required: true, min: 8, max: 50,
  },
});

schema.pre('save', function (next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    this.password = hash;
    next();
  });
});

schema.pre('update', function (next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    this.password = hash;
    next();
  });
});

schema.methods.comparePassword = function (candidatePassword) {
  const passwords = { candidatePassword, password: this.password };
  return new Promise((resolve, reject) => {
    bcrypt.compare(passwords, (err, success) => {
      if (err) return reject(err);
      return resolve(success);
    });
  });
};
const UserFuncionario = mongoose.model('UserFuncionario', schema);

module.exports = UserFuncionario;
