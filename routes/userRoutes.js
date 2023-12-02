const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.get('/getAllUsers', userController.getAllUsers);
router.post('/createUser', userController.createNewUser);


module.exports = router;