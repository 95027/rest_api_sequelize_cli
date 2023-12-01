const express = require('express');
const router = express.Router();
const appController = require('../controllers/AppController');


router.get('/', appController.app);


module.exports = router;