const express = require("express");
const router = express.Router();
const multer = require("multer");
const Panel = require("../models/panelSchema");
const crypto = require("crypto");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    const fn =
      crypto.randomBytes(12).toString("hex") + path.extname(file.originalname);
    cb(null, fn);
  },
});

const upload = multer({ storage: storage });

router.post("/new-project", upload.single("projectImage"), async (req, res) => {
  try {
    const {
      projectName,
      githubLink,
      liveLink,
      projectStatus,
      projectDescription,
    } = req.body;
    const projectImage = req.file ? req.file.filename : null;
    const techStack = req.body.techStack ? JSON.parse(req.body.techStack) : [];
    const keyFeatures = req.body.keyFeatures
      ? JSON.parse(req.body.keyFeatures)
      : [];

    const panel = await Panel.create({
      projectName,
      techStack,
      projectImage,
      githubLink,
      liveLink,
      projectStatus,
      projectDescription,
      keyFeatures,
    });

    res.status(201).json({
      success: true,
      message: "Project added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
