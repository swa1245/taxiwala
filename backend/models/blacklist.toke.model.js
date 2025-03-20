const mongoose = require("mongoose");

const tokenBlacklistSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now, expires: "24h" },
});

module.exports = mongoose.model("BlacklistedToken", tokenBlacklistSchema);
