const express = require("express");
const route = express.Router();
const todoRoutes = require("./todoRoute");
const authRoutes = require("./authRoutes");
const usersRoutes = require("./usersRoutes");
const verifyToken = require("../middleware/auth");
// kita ingin membuat sebuah routing yang methodnya itu adalah get
// app.get kemudian endpoint adalah /
// ketika user mengakses method get dengan endpoint / maka
// si server akan memberikan respon dalam bentuk json yang isinya adalah object
// pesan selamat datang di express server.

route.get("/", (req, res) => {
  res.json({
    message: "Selamat datang di Express Server",
  });
});
// routig untuk todos dan dalam dalamnya
// kita ingin /todos ini bisa di aksesn jika memiliki token maka kita harus
// membuat sebuah middlewares auth
route.use("/auth", authRoutes);
route.use("/users", usersRoutes);
route.use("/todos", verifyToken, todoRoutes);
module.exports = route;
