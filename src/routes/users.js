const express = require('express');
const User = require('../models/users');
const UserController = require('../controllers/users');

const router = express.Router();
const userController = new UserController(User);

router.get('/', (req, res) => userController.get(req, res));
router.get('/:id', (req, res) => userController.getById(req, res));
router.post('/', (req, res) => userController.create(req, res));
router.put('/:id', (req, res) => userController.update(req, res));
router.delete('/:id', (req, res) => userController.remove(req, res));


module.exports = router;
