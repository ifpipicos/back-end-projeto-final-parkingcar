const mongoose = require('mongoose');

const required = true;

const schema = new mongoose.Schema({
  placa: { type: String, required },
  status: { type: Number, required },
  data_entrada: { type: Date },
  data_saida: { type: Date },
});
const EntradaESaida = mongoose.model('EntradaESaida', schema);

module.exports = EntradaESaida;
