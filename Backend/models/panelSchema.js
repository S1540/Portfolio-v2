const mongoose = require("mongoose");

const panelSchema = mongoose.Schema({
  projectName: { type: String, required: true },
  techStack: { type: Array, required: true },
  githubLink: { type: String, required: true },
  liveLink: { type: String, required: true },
  projectImage: { type: String, required: true },
  projectStatus: { type: String, required: true },
  projectDescription: { type: String, required: true },
  keyFeatures: { type: Array, required: true },
});

const Panel = mongoose.model("Panel", panelSchema);
module.exports = Panel;
