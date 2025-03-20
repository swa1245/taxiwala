const express = require("express");
const router = express.Router();
const {body }= require("express-validator");
const capatinController = require("../controllers/capatin.conrioller");

router.post(
  "/register",
  [
    body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("First name must be at least 3 characters long"),
  body("fullname.lastname")
    .isLength({ min: 3 })
    .withMessage("Last name must be at least 3 characters long"),
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  body("vehicle.color")
    .isLength({ min: 1 })
    .withMessage("Please enter a valid vehicle color"),
  body("vehicle.plate")
    .isLength({ min: 1 })
    .withMessage("Please enter a valid vehicle plate"),
  body("vehicle.capacity")
    .isInt({ min: 1 })
    .withMessage("Vehicle capacity must be a positive number"),
  body("vehicle.type")
    .isIn(["motorcycle", "car", "auto"])
    .withMessage("Vehicle type must be motorcycle, car, or auto"),
  ],
  capatinController.registerCapatin
);

module.exports = router;
