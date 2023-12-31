const express = require("express");
const route = express.Router();
const {
  getAllTodo,
  getTodoById,
  createTodo,
} = require("../controllers/todoControllers");
const verifyToken = require("../middleware/auth");

route.get("/", verifyToken, getAllTodo);
route.get("/:id", getTodoById);
route.post("/", createTodo);

module.exports = route;
