const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  cnpj: { type: String, unique: true },
  cidade: { type: String },
  telefone: { type: String },
  cep: { type: String },
});
const Empresa = mongoose.model('Empresa', schema);

module.exports = Empresa;
