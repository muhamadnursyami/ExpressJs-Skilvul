const express = require("express");
const { getAllUser } = require("../controllers/userControllers");
const route = express.Router();

route.get("/", getAllUser);
// route.get("/");
// route.get("/");

module.exports = route;
