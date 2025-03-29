const User = require("../models/userModel");
const userService = require("../services/user.service");
const BlacklistedToken = require("../models/blacklist.toke.model");
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
};

module.exports.registerUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    
    if (!email || !password || !firstname) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const userAlreadyExists = await User.findOne({ 
      email: normalizedEmail 
    }).collation({ locale: 'en', strength: 2 });

    if (userAlreadyExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = await userService.createUser({
      firstname,
      lastname,
      email,
      password
    });

    // Generate token
    const token = generateToken(user);

    // Remove password from response
    const userResponse = {
      _id: user._id,
      email: user.email,
      fullname: user.fullname
    };

    res.status(201).json({
      user: userResponse,
      token
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: error.message || "Registration failed" });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await userService.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isValidPassword = await userService.validatePassword(user, password);
    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = generateToken(user);

    // Remove password from response
    const userResponse = {
      _id: user._id,
      email: user.email,
      fullname: user.fullname
    };

    res.status(200).json({
      user: userResponse,
      token
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: error.message || "Login failed" });
  }
};

module.exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ user });
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({ error: "Failed to get user profile" });
  }
};

module.exports.logoutUser = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
      await BlacklistedToken.create({ token });
    }
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ error: "Logout failed" });
  }
};
