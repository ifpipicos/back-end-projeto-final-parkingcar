const express = require('express');
const UserFuncionario = require('../models/userFuncionarios');
const UserGestoresController = require('../controllers/userFuncionario');

const router = express.Router();
const userfuncionario = new UserGestoresController(UserFuncionario);

router.get('/', (req, res) => userfuncionario.get(req, res));
router.get('/:id', (req, res) => userfuncionario.getById(req, res));
router.post('/', (req, res) => userfuncionario.create(req, res));
router.put('/:id', (req, res) => userfuncionario.update(req, res));
router.delete('/:id', (req, res) => userfuncionario.remove(req, res));


module.exports = router;
