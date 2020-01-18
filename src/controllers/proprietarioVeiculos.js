class ProprietarioVeiculo {
  constructor(proprietarioVeiculo) {
    this.ProprietarioVeiculo = proprietarioVeiculo;
  }

  async get(req, res) {
    try {
      const proprietarioVeiculo = await this.ProprietarioVeiculo.find({});
      res.send(proprietarioVeiculo);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getById(req, res) {
    const {
      params: { id },
    } = req;

    try {
      const proprietarioVeiculo = await this.ProprietarioVeiculo.find({ _id: id });
      res.send(proprietarioVeiculo);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async create(req, res) {
    const proprietarioVeiculo = new this.ProprietarioVeiculo(req.body);
    try {
      await proprietarioVeiculo.save();
      res.status(201).send(proprietarioVeiculo);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async update(req, res) {
    try {
      await this.ProprietarioVeiculo.updateOne({ _id: req.params.id }, req.body);
      res.sendStatus(200);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async remove(req, res) {
    try {
      await this.ProprietarioVeiculo.deleteOne({ _id: req.params.id });
      res.sendStatus(204);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}

module.exports = ProprietarioVeiculo;
