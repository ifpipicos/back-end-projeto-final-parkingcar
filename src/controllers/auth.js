class AuthController {
  constructor(AuthService, User) {
    this.AuthService = AuthService;
    this.User = User;
  }

  async authenticate(req, res) {
    const authService = new this.AuthService(this.User);
    const user = await authService.authenticate(req.body);
    if (!user) {
      return res.sendStatus(401);
    }
    const token = this.AuthService.generateToken({
      username: user.username,
      password: user.password,
      role: user.role,
    });
    return res.send({ token, user });
  }
}

module.exports = AuthController;
