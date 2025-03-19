const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
//express validator is use to avlidate data on routes
// if any error oiccurs in express validatior it is catcjhed in user controller by requestvalidation
router.post("/register", [
  body("email")
    .isEmail()
    .withMessage("Please enter a valid email"),
  body("firstname")
    .isLength({ min: 3 })
    .withMessage("First name must be at least 3 characters long"),
  body("lastname")
    .isLength({ min: 3 })
    .withMessage("Last name must be at least 3 characters long"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
], userController.registerUser);
module.exports = router;
