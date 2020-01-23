const express = require('express');
const AuthController = require('../controllers/auth');
const AuthService = require('../services/auth');
const User = require('../models/users');

const router = express.Router();
const usersController = new AuthController(AuthService, User);
router.post('/authenticate', (req, res) => usersController.authenticate(req, res));
module.exports = router;
