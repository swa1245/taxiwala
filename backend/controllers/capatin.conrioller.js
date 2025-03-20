const captainSchema = require("../models/captain.model");
const capatinService = require("../services/capatin.service");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const blacklistTokeModel = require("../models/blacklist.toke.model");

module.exports.registerCapatin = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if req.body is defined
    if (!req.body) {
      return res.status(400).json({ error: "Request body is missing" });
    }

    const { email, fullname, password, vehicle } = req.body;

    // Validate fullname
    if (!fullname || !fullname.firstname || !fullname.lastname) {
      return res.status(400).json({ error: "Full name is required" });
    }

    // Validate vehicle
    if (
      !vehicle ||
      !vehicle.color ||
      !vehicle.plate ||
      !vehicle.capacity ||
      !vehicle.type
    ) {
      return res.status(400).json({ error: "Vehicle details are required" });
    }

    const isCapatinAlreadyExist = await captainSchema.findOne({ email });
    if (isCapatinAlreadyExist) {
      return res.status(400).json({ error: "Capatin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const Captain = await capatinService.createCaptin({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vechileType: vehicle.type,
    });

    const token = await Captain.generateAuthToken();
    res.status(201).json({ Captain, token });
  } catch (error) {
    console.error("Error in registerCapatin:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.loginCapatin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const captain = await captainSchema.findOne({ email }).select("+password");
  if (!captain) {
    return res.status(401).json({ error: "Invalid email or password" });
  }
  const isMatch = await captain.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ error: "Invalid email or password" });
  }
  const token = await captain.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ success: true, captain, token });
};
module.exports.getCapatinProfile = async (req, res) => {
  res.status(200).json({ success: true, captain: req.captain });
};
module.exports.logoutCapatin = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  await blacklistTokeModel.create({ token });
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Logout successfully" });
};
