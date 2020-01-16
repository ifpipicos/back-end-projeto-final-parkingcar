const express = require('express');
const UserGestores = require('../models/userGestores');
const UserGestoresController = require('../controllers/userGestores');

const router = express.Router();
const userGertoresController = new UserGestoresController(UserGestores);

router.get('/', (req, res) => userGertoresController.get(req, res));
router.get('/:id', (req, res) => userGertoresController.getById(req, res));
router.post('/', (req, res) => userGertoresController.create(req, res));
router.put('/:id', (req, res) => userGertoresController.update(req, res));
router.delete('/:id', (req, res) => userGertoresController.remove(req, res));


module.exports = router;
