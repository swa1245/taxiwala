const { validationResult } = require("express-validator");
const Captain = require("../models/captain.model");
const bcrypt = require("bcrypt");

exports.registerCaptain = async (req, res) => {
  try {
    // Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstname, lastname, email, password, vehicle } = req.body;

    // Check if captain exists
    const existingCaptain = await Captain.findOne({ email: email.toLowerCase() });
    if (existingCaptain) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Create new captain
    const captain = new Captain({
      fullname: {
        firstname,
        lastname: lastname || "",
      },
      email: email.toLowerCase(),
      password,
      vehicle: {
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        type: vehicle.type,
      },
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    captain.password = await bcrypt.hash(password, salt);

    // Save captain
    await captain.save();

    // Generate token
    const token = captain.generateAuthToken();

    // Remove password from response
    const captainResponse = {
      _id: captain._id,
      email: captain.email,
      fullname: captain.fullname,
      vehicle: captain.vehicle,
      status: captain.status,
    };

    res.status(201).json({
      captain: captainResponse,
      token,
    });
  } catch (error) {
    console.error("Captain registration error:", error);
    res.status(500).json({ error: "Registration failed" });
  }
};

exports.loginCaptain = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find captain
    const captain = await Captain.findOne({ email: email.toLowerCase() }).select("+password");
    if (!captain) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Check password
    const validPassword = await captain.comparePassword(password);
    if (!validPassword) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Generate token
    const token = captain.generateAuthToken();

    // Remove password from response
    const captainResponse = {
      _id: captain._id,
      email: captain.email,
      fullname: captain.fullname,
      vehicle: captain.vehicle,
      status: captain.status,
    };

    res.status(200).json({
      captain: captainResponse,
      token,
    });
  } catch (error) {
    console.error("Captain login error:", error);
    res.status(500).json({ error: "Login failed" });
  }
};

exports.getCaptainProfile = async (req, res) => {
  try {
    const captain = await Captain.findById(req.captain._id);
    if (!captain) {
      return res.status(404).json({ error: "Captain not found" });
    }

    // Remove sensitive data
    const captainResponse = {
      _id: captain._id,
      email: captain.email,
      fullname: captain.fullname,
      vehicle: captain.vehicle,
      status: captain.status,
    };

    res.json(captainResponse);
  } catch (error) {
    console.error("Get captain profile error:", error);
    res.status(500).json({ error: "Failed to get profile" });
  }
};

exports.logoutCaptain = async (req, res) => {
  try {
    res.clearCookie("token");
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Captain logout error:", error);
    res.status(500).json({ error: "Logout failed" });
  }
};
