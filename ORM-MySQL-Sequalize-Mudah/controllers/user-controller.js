const bcrypt = require("bcryptjs");
const Users = require("../models/User");
const Todo = require("../models/Todo");
module.exports = {
  getAllUser: async (req, res) => {
    // ketika kita findAll kita masukan include Todo
    const users = await Users.findAll({ include: Todo });
    res.json({
      message: "berhasil mendapatakan data",
      users,
    });
  },
  getUserById: async (req, res) => {
    let { id } = req.params;

    const users = await Users.findAll({
      where: { id: id },
    });

    try {
      res.json({
        message: "berhasil mendapatakan data berdasarkan id",
        users,
      });
    } catch (error) {
      res.json({
        message: "gagal mendapatakan data berdasarkan id",
      });
    }
  },
  createUser: async (req, res) => {
    // kita ambil datanya dari req.body, dari user yang telah di input
    let data = req.body;
    // kemudian kita masukan dia kedatabase
    try {
      // kita hashing dulu passwordnya
      const hashingPassword = bcrypt.hashSync(data.password, 10);
      data.password = hashingPassword;
      // kita import dulu model nya, supaya dari model akan di masukan kedalam databases
      await Users.create(data);
      res.json({
        message: "berhasil menambahkan data users",
      });
    } catch (error) {
      res.json({
        message: "gagal menambahkan data users",
      });
    }
  },
};
