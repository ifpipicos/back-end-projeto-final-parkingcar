const express = require('express');
const EmpresasController = require('../controllers/empresas');
const Empresa = require('../models/empresas');

const router = express.Router();
const empresasController = new EmpresasController(Empresa);
router.get('/', (req, res) => empresasController.get(req, res));
router.get('/:id', (req, res) => empresasController.getById(req, res));
router.post('/', (req, res) => empresasController.create(req, res));
router.put('/:id', (req, res) => empresasController.update(req, res));
router.delete('/:id', (req, res) => empresasController.remove(req, res));

module.exports = router;
