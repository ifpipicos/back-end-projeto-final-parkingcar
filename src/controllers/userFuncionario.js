class UserFuncionarioControllers {
  constructor(userFuncionario) {
    this.UserFuncionario = userFuncionario;
  }

  async get(req, res) {
    try {
      const userFuncionario = await this.UserFuncionario.find({});
      res.send(userFuncionario);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getById(req, res) {
    const {
      params: { id },
    } = req;

    try {
      const userFuncionario = await this.UserFuncionario.find({ _id: id });
      res.send(userFuncionario);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async create(req, res) {
    const userFuncionario = new this.UserFuncionario(req.body);
    try {
      await userFuncionario.save();
      res.status(201).send(userFuncionario);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async update(req, res) {
    try {
      await this.UserFuncionario.updateOne({ _id: req.params.id }, req.body);
      res.sendStatus(200);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async remove(req, res) {
    try {
      await this.UserFuncionario.deleteOne({ _id: req.params.id });
      res.sendStatus(204);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}

module.exports = UserFuncionarioControllers;
