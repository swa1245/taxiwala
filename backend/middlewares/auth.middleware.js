const userSchema = require("../models/userModel");
const captainSchema = require("../models/captain.model");
const jwt = require("jsonwebtoken");
const blacklistTokeModel = require("../models/blacklist.toke.model");

module.exports.authUser = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    const isTokenBlacklisted = await blacklistTokeModel.findOne({ token });
    if (isTokenBlacklisted) {
      return res.status(401).json({ error: "Token is blacklisted" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'taxiwala-secret-key');
    if (!decoded || !decoded.id || decoded.role !== 'user') {
      return res.status(401).json({ error: "Invalid token" });
    }

    const user = await userSchema.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("Auth error:", err);
    return res.status(401).json({ error: "Authentication failed" });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    const isTokenBlacklisted = await blacklistTokeModel.findOne({ token });
    if (isTokenBlacklisted) {
      return res.status(401).json({ error: "Token is blacklisted" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'taxiwala-secret-key');
    if (!decoded || !decoded.id || decoded.role !== 'captain') {
      return res.status(401).json({ error: "Invalid token" });
    }

    const captain = await captainSchema.findById(decoded.id);
    if (!captain) {
      return res.status(401).json({ error: "Captain not found" });
    }

    req.captain = captain; 
    next();
  } catch (err) {
    console.error("Auth error:", err);
    return res.status(401).json({ error: "Authentication failed" });
  }
};
