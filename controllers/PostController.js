const { Post } = require('../models');

const createNewPost = async (req, res, next) => {

    try {
        const { title, description } = req.body;
    
        const newPost = await Post.create({title, description});

        res.json({message: 'post created successfully'});
        
    } catch (error) {
        next(error);
    }
}


module.exports = {
    createNewPost,
}