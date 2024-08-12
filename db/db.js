const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(

    );
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1); // Exit the process with failure
  }
}

module.exports = connectDB;
