const express = require("express");
const router = express.Router();
const { getItems, addItem } = require("../controllers/itemController");

router.get("/", getItems);
router.post("/", addItem);

module.exports = router;
