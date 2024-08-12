const express = require("express");
const Player = require("../models/Player");
const Team = require("../models/Team");

const router = express.Router();

// Route for creating a player
router.post("/create", async (req, res) => {
  const { name, email, position, teamId } = req.body;

  try {
    // Find the team by ID
    const team = await Team.findById(teamId);
    if (!team) {
      return res.status(404).send("Team not found");
    }

    const newPlayer = new Player({
      name,
      email,
      position,
      team: team._id,
    });

    await newPlayer.save();
    res.send("Player created successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
