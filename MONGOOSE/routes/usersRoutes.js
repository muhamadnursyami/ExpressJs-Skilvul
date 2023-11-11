const express = require("express");
const {
  getAllUser,
  getUserById,
  createUser,
} = require("../controllers/usersControllers");
const route = express.Router();

route.get("/", getAllUser);
route.get("/:id", getUserById);
route.post("/", createUser);

module.exports = route;
