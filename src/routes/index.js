const express = require('express');
const usuariosRoute = require('./users');
const empresasRoute = require('./empresas');
const userGerstoresRoute = require('./userGestores');
const userFuncionarioRoute = require('./userFuncionario');
const proprietaroVeiculos = require('./proprietarioVeiculos');
const veiculos = require('./veiculos');
const entradaESaida = require('./entradaESaida');

const router = express.Router();

router.use('/users', usuariosRoute);
router.use('/empresas', empresasRoute);
router.use('/user-gestores', userGerstoresRoute);
router.use('/user-funcionario', userFuncionarioRoute);
router.use('/proprietario-veiculos', proprietaroVeiculos);
router.use('/veiculos', veiculos);
router.use('/entrada-e-saida', entradaESaida);

router.get('/', (req, res) => res.send('App Online!'));

module.exports = router;
