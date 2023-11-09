const express = require("express");
const {
  getAllTodo,
  getTodoById,
  createTodo,
} = require("../controllers/todo-controller");
const routes = express.Router();

routes.get("/", getAllTodo);
routes.get("/:id", getTodoById);
routes.post("/", createTodo);

module.exports = routes;
