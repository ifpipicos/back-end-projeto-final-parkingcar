const express = require('express');
const usuariosRoute = require('./users');
const empresasRoute = require('./empresas');
const userGerstoresRoute = require('./users');
const proprietaroVeiculos = require('./proprietarioVeiculos');
const veiculos = require('./veiculos');
const entradaESaida = require('./entradaESaida');
const auth = require('./auth');

const router = express.Router();

router.use('/users', usuariosRoute);
router.use('/empresas', empresasRoute);
router.use('/user', userGerstoresRoute);
router.use('/proprietario-veiculos', proprietaroVeiculos);
router.use('/veiculos', veiculos);
router.use('/entrada-e-saida', entradaESaida);
router.use('/auth', auth);
router.get('/', (req, res) => res.send('App Online!'));

module.exports = router;
