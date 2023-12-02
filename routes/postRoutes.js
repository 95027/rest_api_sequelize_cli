const express = require('express');
const router = express.Router();
const postController = require('../controllers/PostController');


router.post('/addPost', postController.createNewPost);


module.exports = router;