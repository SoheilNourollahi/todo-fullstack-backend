//import mongoose to create new schema
const mongoose = require("mongoose");

const todoItemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("TodoItem", todoItemSchema);
