const express = require('express');
const User = require('../models/users');
const UserGestoresController = require('../controllers/userGestor');

const router = express.Router();
const userGestores = new UserGestoresController(User);

router.get('/', (req, res) => userGestores.get(req, res));
router.get('/:id', (req, res) => userGestores.getById(req, res));
router.post('/', (req, res) => userGestores.create(req, res));
router.put('/:id', (req, res) => userGestores.update(req, res));
router.delete('/:id', (req, res) => userGestores.remove(req, res));

module.exports = router;
