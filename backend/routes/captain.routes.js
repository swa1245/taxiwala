const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");
const { authCaptain } = require("../middlewares/auth.middleware");

router.post(
  "/register",
  [
    body("firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
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
  captainController.registerCaptain
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ],
  captainController.loginCaptain
);

router.get("/profile", authCaptain, captainController.getCaptainProfile);
router.get("/logout", authCaptain, captainController.logoutCaptain);

module.exports = router;
