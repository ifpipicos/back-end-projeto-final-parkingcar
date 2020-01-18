const momgoose = require('mongoose');

const schema = new momgoose.Schema({
  nome: { type: String, required: true },
  cpf: { type: String, unique: true },
  telefone: { type: String },
  endereco: { type: String },
  observacao: { type: String },
});

const ProprietarioVeiculo = momgoose.model('ProprietarioVeiculos', schema);

module.exports = ProprietarioVeiculo;
