const express = require("express");
const route = express.Router();
const usersRoutes = require("./usersRoutes");
const todoRoutes = require("./todoRoutes");
const authRoutes = require("./authRoutes");

route.get("/", (req, res) => {
  res.json({
    message: "Selamat datang di server express mongoose",
  });
});
route.use("/auth", authRoutes);
route.use("/users", usersRoutes);
route.use("/todos", todoRoutes);

module.exports = route;
