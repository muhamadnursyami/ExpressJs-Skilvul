// import hanya model index nya aja, jangan model user.jsnya
// karena dari index.js  kita ambil User
const { User } = require("../models");
module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.findAll();

    res.json({
      message: "berhasil mendapatkan data",
      users,
    });
  },
  getUserById: async (req, res) => {},
  addUser: async (req, res) => {},
};
