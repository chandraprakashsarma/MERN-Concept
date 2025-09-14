const express = require("express");
const router = express.Router();
const ReactConcept = require("../models/ReactConcept");

// @desc Get all React Concepts
// @route GET /api/reactconcepts
router.get("/", async (req, res) => {
  try {
    const concepts = await ReactConcept.find();
    res.json(concepts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
