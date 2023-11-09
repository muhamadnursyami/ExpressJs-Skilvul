const bcrypt = require("bcryptjs");
const Todo = require("../models/Todo");

module.exports = {
  getAllTodo: async (req, res) => {
    const users = await Todo.findAll();
    res.json({
      message: "berhasil mendapatakan data",
      users,
    });
  },
  getTodoById: async (req, res) => {
    let { id } = req.params;

    const users = await Todo.findAll({
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
  createTodo: async (req, res) => {
    // kita ambil datanya dari req.body, dari user yang telah di input
    let data = req.body;
    // kemudian kita masukan dia kedatabase
    try {
      await Todo.create(data);
      res.json({
        message: "berhasil menambahkan data todo",
      });
    } catch (error) {
      res.json({
        message: "gagal menambahkan data todo",
      });
    }
  },
};
