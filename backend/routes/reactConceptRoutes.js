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

// @desc Update a React Concept
// @route PUT /api/reactconcepts/:id
router.put("/:id", async (req, res) => {
  const { name, route } = req.body;

  try {
    const concept = await ReactConcept.findById(req.params.id);
    if (!concept) {
      return res.status(404).json({ message: "Concept not found" });
    }

    concept.name = name || concept.name;
    concept.route = route || concept.route;

    const updatedConcept = await concept.save();
    res.json(updatedConcept);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc Delete a React Concept
// @route DELETE /api/reactconcepts/:id
router.delete("/:id", async (req, res) => {
  try {
    const concept = await ReactConcept.findById(req.params.id);
    if (!concept) {
      return res.status(404).json({ message: "Concept not found" });
    }

    await concept.deleteOne();
    res.json({ message: "Concept deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
