const mongoose = require("mongoose");
const connectionDB = async (uri) => {
  await mongoose.connect(uri);
  console.log("connection successfully");
};

module.exports = connectionDB;
