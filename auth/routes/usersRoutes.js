const express = require("express");

const Users = require("../models/Users");
const route = express.Router();

// ngambil semua user
route.get("/", (req, res) => {
  res.json({
    data: Users,
  });
});
// route.getById("/register", (req, res) => {

// });

module.exports = route;
