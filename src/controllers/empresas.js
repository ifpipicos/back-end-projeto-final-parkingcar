class EmpresasController {
  constructor(empresa) {
    this.Empresa = empresa;
  }

  async get(req, res) {
    try {
      const empresas = await this.Empresa.find({});
      res.send(empresas);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getById(req, res) {
    const {
      params: { id },
    } = req;

    try {
      const empresa = await this.Empresa.find({ _id: id });
      res.send(empresa);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async create(req, res) {
    const empresa = new this.Empresa(req.body);
    try {
      await empresa.save();
      res.status(201).send(empresa);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async update(req, res) {
    try {
      await this.Empresa.updateOne({ _id: req.params.id }, req.body);
      res.sendStatus(200);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async remove(req, res) {
    try {
      await this.Empresa.deleteOne({ _id: req.params.id });
      res.sendStatus(204);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}

module.exports = EmpresasController;
