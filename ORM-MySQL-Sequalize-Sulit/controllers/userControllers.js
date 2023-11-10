// import hanya model index nya aja, jangan model user.jsnya
// karena dari index.js  kita ambil User
const { User } = require("../models");
module.exports = {
  getAllUser: async (req, res) => {
    // artinya ambil data dari model User
    // ambil semua dan pilih dimana attribute yang memiliki
    // password kita tidak tampilkan di response
    // jadi ketika di send repson tidak tampilkan passwordnya
    const users = await User.findAll({ attributes: { exclude: ["password"] } });

    res.json({
      message: "berhasil mendapatkan data",
      users,
    });
  },
  getUserById: async (req, res) => {},
  addUser: async (req, res) => {},
};
