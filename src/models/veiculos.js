const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  placa: String,
  cor: String,
  modelo: String,
  _id_proprietario_veiculo: String,
  descricao: String,
});

const Veiculos = mongoose.model('Veiculos', schema);

module.exports = Veiculos;
