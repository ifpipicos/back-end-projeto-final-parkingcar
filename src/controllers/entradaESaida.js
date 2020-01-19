const moment = require('moment');

class EntradaESaidaController {
  constructor(entradaESaida) {
    this.EntradaESaida = entradaESaida;
  }

  async get(req, res) {
    try {
      const entradaESaida = await this.EntradaESaida.find({});
      res.send(entradaESaida);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getById(req, res) {
    const {
      params: { id },
    } = req;

    try {
      const entradaESaida = await this.EntradaESaida.find({ _id: id });
      res.send(entradaESaida);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async create(req, res) {
    const entradaESaida = new this.EntradaESaida(req.body);
    entradaESaida.data_entrada = moment().format();
    try {
      await entradaESaida.save();
      res.status(201).send(entradaESaida);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async update(req, res) {
    const entradaESaida = req.body;
    try {
      const { status } = req.body;
      if (status === 2) {
        entradaESaida.data_saida = moment().format();
      }
      await this.EntradaESaida.updateOne({ _id: req.params.id }, entradaESaida);
      res.sendStatus(200);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async remove(req, res) {
    try {
      // eslint-disable-next-line no-console
      console.log('Entrada:', req.body);
      await this.EntradaESaida.deleteOne({ _id: req.params.id });
      res.sendStatus(204);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}

module.exports = EntradaESaidaController;
