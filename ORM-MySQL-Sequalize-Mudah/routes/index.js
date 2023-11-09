const express = require("express");

const route = express.Router();
const userRoutes = require("./userRoutes");
const todoRoutes = require("./todoRoutes");
route.get("/", (req, res) => {
  res.json({
    message: "Selamat datang server Squalize Mudah",
  });
});

route.use("/users", userRoutes);
route.use("/todos", todoRoutes);

module.exports = route;
