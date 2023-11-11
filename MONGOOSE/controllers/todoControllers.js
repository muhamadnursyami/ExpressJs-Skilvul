const Todo = require("../models/todo");

module.exports = {
  getAllTodo: async (req, res) => {
    // mencari semua data di todo kemudian kita ingin populate
    // atau bacanya ingin mau unboxing dari userID itu isinya milik siapa
    // dan kita ingin hanya menampilkan id dan name saja.

    const todos = await Todo.find().populate("userID", ["id", "name"]);
    // jika ingin menampilkan semua datanya pakai ini
    // const todos = await Todo.find().populate("userID");

    res.json({
      message: "berhasil mendapatkan data todo",
      data: todos,
    });
  },

  getTodoById: (req, res) => {},

  createTodo: async (req, res) => {
    let data = req.body;

    await Todo.create(data);

    res.json({
      message: "berhasil membuat data todo",
    });
  },
};
