const mongoose = require("mongoose");

function connectDb() {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    })
    .then(() => console.log("Connected to MongoDB"));
    
}

module.exports = connectDb