const TodoItems = require("../models/todoItems");

const getItems = async (req, res) => {
  try {
    const data = await TodoItems.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
    console.log(error);
  }
};

const createItem = async (req, res) => {
  const { item } = req.body;
  try {
    const todoItem = await TodoItems.create({ item });
    res.status(201).json(todoItem);
  } catch (error) {
    res.status(500).json({ error });
    console.log(error);
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const todoItem = await TodoItems.findOneAndDelete({ _id: id });
    res.status(200).json(todoItem);
  } catch (error) {
    res.status(500).json({ error });
    console.log(error);
  }
};
const updateItem = async (req, res) => {
  const { id } = req.params;
  const { item } = req.body;
  try {
    const todoItem = await TodoItems.findOneAndUpdate(
      { _id: id },
      { item },
      { new: true }
    );
    res.status(200).json(todoItem);
  } catch (error) {
    res.status(500).json({ error });
    console.log(error);
  }
};
module.exports = { getItems, createItem, deleteItem, updateItem };
