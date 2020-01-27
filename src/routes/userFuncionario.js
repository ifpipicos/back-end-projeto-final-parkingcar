const express = require('express');
const User = require('../models/users');
const UserFuncionarioController = require('../controllers/userFuncionario');

const router = express.Router();
const userFuncionario = new UserFuncionarioController(User);

router.get('/', (req, res) => userFuncionario.get(req, res));
router.get('/:id', (req, res) => userFuncionario.getById(req, res));
router.post('/', (req, res) => userFuncionario.create(req, res));
router.put('/:id', (req, res) => userFuncionario.update(req, res));
router.delete('/:id', (req, res) => userFuncionario.remove(req, res));


module.exports = router;
