const express = require("express");
const Team = require("../models/Team");

const router = express.Router();

// Route for creating a team
router.post("/create", async (req, res) => {
  const { name, city } = req.body;

  try {
    const newTeam = new Team({
      name,
      city,
    });

    await newTeam.save();
    res.send("Team created successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
