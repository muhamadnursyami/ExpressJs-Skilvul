const express = require("express");
const route = express.Router();

const {
  getAllTodo,
  getTodoById,
  addTodo,
  e,
  editTodoById,
  deleteTodoById,
} = require("../controllers/todoController");
route.get("/", getAllTodo);
route.get("/:id", getTodoById);
route.post("/", addTodo);
route.put("/:id", editTodoById);
route.delete("/:id", deleteTodoById);

module.exports = route;
