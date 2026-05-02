const express = require("express");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/chat", protect, async (req, res) => {
  const { prompt } = req.body;

  // TEMP AI LOGIC
  const reply = `AI Assistant says: I received your question - "${prompt}"`;

  res.json({ reply });
});

module.exports = router;
