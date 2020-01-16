const express = require('express');
const usuariosRoute = require('./users');
const empresasRoute = require('./empresas');

const router = express.Router();

router.use('/users', usuariosRoute);
router.use('/empresas', empresasRoute);
router.get('/', (req, res) => res.send('App Online!'));

module.exports = router;
