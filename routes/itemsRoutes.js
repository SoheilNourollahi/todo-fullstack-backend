const itemsRouter = require("express").Router();
const {
  getItems,
  createItem,
  deleteItem,
  updateItem,
} = require("../controller/items");
itemsRouter.route("/").get(getItems).post(createItem);
itemsRouter.route("/:id").delete(deleteItem).put(updateItem);
module.exports = itemsRouter;
