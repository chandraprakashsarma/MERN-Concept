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

// @desc Add a new React Concept
// @route POST /api/reactconcepts
router.post("/", async (req, res) => {
  const { name, route } = req.body;

  if (!name || !route) {
    return res.status(400).json({ message: "Please provide name and route" });
  }

  try {
    const newConcept = new ReactConcept({ name, route });
    await newConcept.save();
    res.status(201).json(newConcept);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
