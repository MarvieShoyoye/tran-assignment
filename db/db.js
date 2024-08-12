const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://techzone:techzone@cluster0.wcdqtxm.mongodb.net/tranassignment=Cluster0"
    );
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1); // Exit the process with failure
  }
}

module.exports = connectDB;
