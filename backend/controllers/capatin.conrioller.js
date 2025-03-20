const captainSchema = require("../models/captain.model");
const capatinService = require("../services/capatin.service");
const {validationResult} = require("express-validator");
const bcrypt = require("bcrypt");

module.exports.registerCapatin = async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      // Check if req.body is defined
      if (!req.body) {
        return res.status(400).json({ error: "Request body is missing" });
      }
  
      const { email, fullname, password, vehicle } = req.body;
  
      // Validate fullname
      if (!fullname || !fullname.firstname || !fullname.lastname) {
        return res.status(400).json({ error: "Full name is required" });
      }
  
      // Validate vehicle
      if (!vehicle || !vehicle.color || !vehicle.plate || !vehicle.capacity || !vehicle.type) {
        return res.status(400).json({ error: "Vehicle details are required" });
      }
  
      const isCapatinAlreadyExist = await captainSchema.findOne({ email });
      if (isCapatinAlreadyExist) {
        return res.status(400).json({ error: "Capatin already exists" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const Captain = await capatinService.createCaptin({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vechileType: vehicle.type,
      });
  
      const token = await Captain.generateAuthToken();
      res.status(201).json({ Captain, token });
    } catch (error) {
      console.error("Error in registerCapatin:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  