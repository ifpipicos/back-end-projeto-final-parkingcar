const express = require('express');
const usuariosRoute = require('./users');
const empresasRoute = require('./empresas');
const userGerstoresRoute = require('./userGestores');

const router = express.Router();

router.use('/users', usuariosRoute);
router.use('/empresas', empresasRoute);
router.use('/user-gestores', userGerstoresRoute);

router.get('/', (req, res) => res.send('App Online!'));

module.exports = router;
