class UserControllers {
  constructor(User) {
    this.User = User;
  }

  async get(req, res) {
    try {
      const user = await this.User.find({ role: 'funcionario' });
      res.send(user);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getById(req, res) {
    const {
      params: { id },
    } = req;

    try {
      const user = await this.User.find({ _id: id, role: 'funcionario' });
      res.send(user);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async create(req, res) {
    const user = new this.User(req.body);
    try {
      await user.save();
      res.status(201).send(user);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async update(req, res) {
    try {
      await this.User.updateOne({ _id: req.params.id, role: 'funcionario' }, req.body);
      res.sendStatus(200);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async remove(req, res) {
    try {
      await this.User.deleteOne({ _id: req.params.id, role: 'funcionario' });
      res.sendStatus(204);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}

module.exports = UserControllers;
