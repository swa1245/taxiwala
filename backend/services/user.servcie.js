const userSchema = require("../models/userModel");

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  if (!firstname || !email || !password) {
    return { error: "Please fill in all fields" };
  }
  const user = userSchema.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });
  return user;
};
