const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    lastname: {
      type: String,
      minlength: 3,
      maxlength: 50,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 50,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: 8,
    maxlength: 1024,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    default: "inactive",
    enum: ["active", "inactive"],
  },
  vechile: {
    color: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    plate: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    capacity: {
      type: Number,
      required: true,
      min: 1,
    },
    type: {
      type: String,
      required: true,
      enum: ["motorcycle", "car", "auto"],
    },
  },
  location: {
    latitute: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  },
});

captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
  return token;
};
captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
captainSchema.methods.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

module.exports = mongoose.model("Captain", captainSchema);
