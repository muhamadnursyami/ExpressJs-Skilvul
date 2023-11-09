const express = require("express");
const {
  getAllUser,
  getUserById,
  createUser,
} = require("../controllers/user-controller");

const routes = express.Router();

routes.get("/", getAllUser);
routes.get("/:id", getUserById);
routes.post("/", createUser);

module.exports = routes;
