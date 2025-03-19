const User = require("../models/userModel");
const userService = require("../services/user.servcie");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const { firstname, lastname, email, password } = req.body;
    const hashPassword = await User.hashPassword(password);
    
    // Create new user with proper structure
    const user = await User.create({
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: hashPassword
    });
    
    const token = user.generateAuthToken();
    
    // Remove password from response
    user.password = undefined;
    
    res.status(201).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    console.error('Registration error:', error);
    next(error);
  }
};
