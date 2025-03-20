const userSchema = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const isTokenBlacklisted = await userSchema.findOne({ token });
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
