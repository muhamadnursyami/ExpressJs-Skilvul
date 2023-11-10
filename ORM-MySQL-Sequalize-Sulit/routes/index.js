const express = require("express");
const route = express();

const userRoute = require("./userRoutes");
route.get("/", (req, res) => {
  res.json({
    message: "selamat datang di server Sequalize sulit migration",
  });
});

route.use("/users", userRoute);

// route.use("/users", usersRoute);

module.exports = route;
