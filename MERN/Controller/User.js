const fs = require("fs");
const model = require("../Models/product");
const Item = model.Item;
const mongoose = require("mongoose");

//Updated the data
exports.patchdata = async (req, res) => {
  const id = req.params.id; //for getting url id
  const docs = await Item.findByIdAndUpdate({ _id: id }, req.body);
  res.json(docs);
};

exports.deleteItem = async (req, res) => {
  const id = req.params.id; //for getting url id

  const data = await Item.findOneAndDelete({ _id: id });
  res.json(data);
};

//Create a new User
exports.createUser = async (req, res) => {
  try {
    const item = new Item(req.body);
    const savedItem = await item.save();
    console.log(savedItem);
    res.json(savedItem);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while creating the item" });
  }
};

//Read data by id
exports.getData = async (req, res) => {
  const id = req.params.id;
  const data = await Item.findById(id);
  res.json(data);
};
//Read all data
exports.getall = async (req, res) => {
  const data = await Item.find();
  res.json(data);
};
