const { User, Profile, Post } = require("../models");

// Find all users with associated profile
const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.findAll({
      include: [{ model: Profile, as: "profile" }, {model: Post, as: 'post'}],
    });
    res.json(allUsers);
  } catch (error) {
    next(error);
  }
};

// Create a new user
const createNewUser = async (req, res, next) => {

    const {username, email, bio} = req.body;

    try {
      const newUser = await User.create({ username, email });
      const newProfile = await Profile.create({bio, userId: newUser.id});

      // updating the profileId in users table
      await newUser.update({profileId : newProfile.id});

      res.json({message: 'User created successfully...'});
      
    } catch (error) {
      next(error);
    }
};

module.exports = {
  getAllUsers,
  createNewUser,
};
