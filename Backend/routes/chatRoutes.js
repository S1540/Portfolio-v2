const express = require("express");
const router = express.Router();
const { chatWithAI } = require("../controller/geminiChat");
router.post("/", chatWithAI);
module.exports = router;
