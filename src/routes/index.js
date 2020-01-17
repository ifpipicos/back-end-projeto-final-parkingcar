const express = require('express');
const usuariosRoute = require('./users');
const empresasRoute = require('./empresas');
const userGerstoresRoute = require('./userGestores');
const userFuncionarioRoute = require('./userFuncionario');

const router = express.Router();

router.use('/users', usuariosRoute);
router.use('/empresas', empresasRoute);
router.use('/user-gestores', userGerstoresRoute);
router.use('/user-funcionario', userFuncionarioRoute);

router.get('/', (req, res) => res.send('App Online!'));

module.exports = router;
