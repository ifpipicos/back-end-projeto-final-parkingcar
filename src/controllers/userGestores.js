class UserGestoresControllers {
  constructor(userGestor) {
    this.UserGestor = userGestor;
  }

  async get(req, res) {
    try {
      const userGestor = await this.UserGestor.find({});
      res.send(userGestor);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getById(req, res) {
    const {
      params: { id },
    } = req;

    try {
      const userGestor = await this.UserGestor.find({ _id: id });
      res.send(userGestor);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async create(req, res) {
    const userGestor = new this.UserGestor(req.body);
    try {
      await userGestor.save();
      res.status(201).send(userGestor);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async update(req, res) {
    try {
      await this.UserGestor.updateOne({ _id: req.params.id }, req.body);
      res.sendStatus(200);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async remove(req, res) {
    try {
      await this.UserGestor.deleteOne({ _id: req.params.id });
      res.sendStatus(204);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}

module.exports = UserGestoresControllers;
