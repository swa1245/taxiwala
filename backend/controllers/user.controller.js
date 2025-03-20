const User = require("../models/userModel");
const userService = require("../services/user.servcie");
const { validationResult } = require("express-validator");

const BlacklistedToken = require("../models/blacklist.toke.model");

module.exports.registerUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstname, lastname, email, password } = req.body;
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res.status(400).json({ error: "User already exists" });
    }
    const hashPassword = await User.hashPassword(password);

    // Create new user with proper structure
    const user = await User.create({
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: hashPassword,
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
    console.error("Registration error:", error);
    next(error);
  }
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ error: "invalid email or password" });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ error: "invalid email or password" });
  }
  const token = user.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ success: true, user, token });
};

module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json({ success: true, user: req.user });
};

module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  await BlacklistedToken.create({ token });
  res.status(200).json({ success: true, message: "Logged out" });
};
