const express = require("express");
const router = express.Router();
const Panel = require("../models/panelSchema");

router.post("/new-project", async (req, res) => {
  try {
    const {
      projectName,
      techStack,
      githubLink,
      liveLink,
      projectStatus,
      projectDescription,
    } = req.body;

    const panel = await Panel.create({
      projectName,
      techStack, // already array
      githubLink,
      liveLink,
      projectStatus,
      projectDescription,
    });

    res.status(201).json({
      success: true,
      message: "Project added successfully",
      panel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
