class VeiculosController {
  constructor(veiculos) {
    this.Veiculos = veiculos;
  }

  async get(req, res) {
    try {
      const veiculos = await this.Veiculos.find({});
      res.send(veiculos);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getById(req, res) {
    const {
      params: { id },
    } = req;

    try {
      const veiculos = await this.Veiculos.find({ _id: id });
      res.send(veiculos);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async create(req, res) {
    const veiculos = new this.Veiculos(req.body);
    try {
      await veiculos.save();
      res.status(201).send(veiculos);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async update(req, res) {
    try {
      await this.Veiculos.updateOne({ _id: req.params.id }, req.body);
      res.sendStatus(200);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async remove(req, res) {
    try {
      await this.Veiculos.deleteOne({ _id: req.params.id });
      res.sendStatus(204);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}

module.exports = VeiculosController;
