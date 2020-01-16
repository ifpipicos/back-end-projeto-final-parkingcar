const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  cnpj: String,
  cidade: String,
  telefone: String,
  cep: String,
});
const Empresa = mongoose.model('Empresa', schema);

module.exports = Empresa;
