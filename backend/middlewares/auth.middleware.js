const userSchema = require("../models/userModel");
const captainSchema = require("../models/captain.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const blacklistTokeModel = require("../models/blacklist.toke.model");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const isTokenBlacklisted = await blacklistTokeModel.findOne({ token });
    if (isTokenBlacklisted) {
        return res.status(401).json({ error: "Unauthorized" });
    }
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userSchema.findById(decoded._id);
    req.user = user;
    next();
  }catch(err){
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const isTokenBlacklisted = await blacklistTokeModel.findOne({ token });
  if (isTokenBlacklisted) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainSchema.findById(decoded._id);
    req.captain = captain;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized" });
  }
}
