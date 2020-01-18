const express = require('express');
const ProprietarioVeiculosController = require('../controllers/proprietarioVeiculos');
const ProprietarioVeiculos = require('../models/proprietarioVeiculos');

const router = express.Router();
const proprietarioVeiculos = new ProprietarioVeiculosController(ProprietarioVeiculos);
router.get('/', (req, res) => proprietarioVeiculos.get(req, res));
router.get('/:id', (req, res) => proprietarioVeiculos.getById(req, res));
router.post('/', (req, res) => proprietarioVeiculos.create(req, res));
router.put('/:id', (req, res) => proprietarioVeiculos.update(req, res));
router.delete('/:id', (req, res) => proprietarioVeiculos.remove(req, res));

module.exports = router;
