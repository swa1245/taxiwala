const User = require("../models/userModel");
const userService = require("../services/user.servcie");
const { validationResult } = require("express-validator");
const BlacklistedToken = require("../models/blacklist.toke.model");

module.exports.registerUser = async (req, res) => {
  try {
    console.log("Registration request received:", req.body);
    
    // Validate request body
    if (!req.body) {
      return res.status(400).json({ error: "Request body is missing" });
    }

    const { firstname, lastname, email, password } = req.body;
    
    // Validate required fields
    if (!email || !password || !firstname) {
      console.log("Missing required fields");
      return res.status(400).json({ error: "Required fields missing" });
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim();

    // Check for existing user with exact email match
    const userAlreadyExists = await User.findOne({ 
      email: normalizedEmail 
    }).collation({ locale: 'en', strength: 2 });

    if (userAlreadyExists) {
      console.log("User already exists with email:", normalizedEmail);
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash password
    const hashPassword = await User.hashPassword(password);
    console.log("Password hashed successfully");

    // Create new user
    const user = await User.create({
      fullname: {
        firstname: firstname.trim(),
        lastname: lastname ? lastname.trim() : "",
      },
      email: normalizedEmail,
      password: hashPassword,
    });

    console.log("User created successfully:", user._id);

    // Generate token
    const token = user.generateAuthToken();
    console.log("Auth token generated");

    // Remove password from response
    const userResponse = user.toObject();
    delete userResponse.password;

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: userResponse,
      token
    });

  } catch (error) {
    console.error("Registration error:", error);
    
    // Handle MongoDB duplicate key error
    if (error.code === 11000 && error.keyPattern?.email) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ error: messages.join(', ') });
    }

    return res.status(500).json({ 
      error: "Registration failed",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

module.exports.loginUser = async (req, res, next) => {
  try {
    console.log("Login request received:", req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Validation errors:", errors.array());
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      console.log("User not found with email:", email);
      return res.status(401).json({ error: "invalid email or password" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      console.log("Password mismatch for user with email:", email);
      return res.status(401).json({ error: "invalid email or password" });
    }
    const token = user.generateAuthToken();
    console.log("Auth token generated for user with email:", email);
    res.cookie("token", token);
    res.status(200).json({ success: true, user, token });
  } catch (error) {
    console.error("Login error details:", {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    return res.status(500).json({ 
      error: "Login failed",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

module.exports.getUserProfile = async (req, res, next) => {
  try {
    console.log("Get user profile request received for user:", req.user);
    res.status(200).json({ success: true, user: req.user });
  } catch (error) {
    console.error("Get user profile error details:", {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    return res.status(500).json({ 
      error: "Failed to get user profile",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

module.exports.logoutUser = async (req, res, next) => {
  try {
    console.log("Logout request received for user:", req.user);
    res.clearCookie("token");
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    await BlacklistedToken.create({ token });
    console.log("Token blacklisted successfully:", token);
    res.status(200).json({ success: true, message: "Logged out" });
  } catch (error) {
    console.error("Logout error details:", {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    return res.status(500).json({ 
      error: "Logout failed",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};
