const express = require('express');
const EntradaESaidaController = require('../controllers/entradaESaida');
const EntradaESaida = require('../models/entradaESaida');

const router = express.Router();
const entradaESaidaController = new EntradaESaidaController(EntradaESaida);
router.get('/', (req, res) => entradaESaidaController.get(req, res));
router.get('/:id', (req, res) => entradaESaidaController.getById(req, res));
router.post('/', (req, res) => entradaESaidaController.create(req, res));
router.put('/:id', (req, res) => entradaESaidaController.update(req, res));
router.delete('/:id', (req, res) => entradaESaidaController.remove(req, res));

module.exports = router;
