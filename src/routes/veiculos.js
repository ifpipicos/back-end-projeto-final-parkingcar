const express = require('express');
const veiculos = require('../models/veiculos');
const VeiculosController = require('../controllers/veiculos');

const router = express.Router();
const veiculosController = new VeiculosController(veiculos);

router.get('/', (req, res) => veiculosController.get(req, res));
router.get('/:id', (req, res) => veiculosController.getById(req, res));
router.get('/placa/:placa', (req, res) => veiculosController.getByPlaca(req, res));
router.post('/', (req, res) => veiculosController.create(req, res));
router.put('/:id', (req, res) => veiculosController.update(req, res));
router.delete('/:id', (req, res) => veiculosController.remove(req, res));


module.exports = router;
