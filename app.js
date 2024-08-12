const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db/db");
const teamRoutes = require("./routes/teamRoutes");
const playerRoutes = require("./routes/playerRoutes");

const app = express();
app.use(bodyParser.json());

// Use routes
app.use("/team", teamRoutes);
app.use("/player", playerRoutes);

// Connect to MongoDB and start the server
connectDB().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
