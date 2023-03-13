require("dotenv").config();
const connectionDB = require("./db/connect");
const itemsRouter = require("./routes/itemsRoutes");
const TodoItem = require("./models/todoItems");
const error = require("./middleware/errors");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/todos", itemsRouter);
app.use("*", error);
const PORT = process.env.PORT || 8080;
const start = async () => {
  try {
    await connectionDB(process.env.DB_CONNECT);
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
