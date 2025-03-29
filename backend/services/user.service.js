const User = require("../models/userModel");

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  if (!firstname || !email || !password) {
    throw new Error("Please fill in all fields");
  }

  const normalizedEmail = email.toLowerCase().trim();
  const hashPassword = await User.hashPassword(password);

  const user = await User.create({
    fullname: {
      firstname: firstname.trim(),
      lastname: lastname ? lastname.trim() : "",
    },
    email: normalizedEmail,
    password: hashPassword,
  });

  return user;
};

module.exports.findUserByEmail = async (email) => {
  return await User.findOne({ email: email.toLowerCase().trim() }).select('+password');
};

module.exports.validatePassword = async (user, password) => {
  return await user.comparePassword(password);
};
