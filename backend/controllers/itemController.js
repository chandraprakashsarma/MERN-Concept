const Item = require("../models/Item");

// GET all items
const getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

// ADD item
const addItem = async (req, res) => {
  const newItem = new Item({ name: req.body.name });
  await newItem.save();
  res.json(newItem);
};

module.exports = { getItems, addItem };
