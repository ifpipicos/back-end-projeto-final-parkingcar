const mongoose = require('mongoose');

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

const UserGestor = mongoose.model('UserGestor', schema);

module.exports = UserGestor;
