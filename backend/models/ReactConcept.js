const mongoose = require("mongoose");

const reactConceptSchema = new mongoose.Schema({
  name: { type: String, required: true },
  route: { type: String, required: true },
});

module.exports = mongoose.model("ReactConcept", reactConceptSchema);
