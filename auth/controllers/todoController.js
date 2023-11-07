const Todos = require("../models/Todos");

module.exports = {
  getAllTodo: (req, res) => {
    res.json({
      message: "berhasil mendapatkan data",
      data: Todos,
    });
  },
  getTodoById: (req, res) => {
    const { id } = req.params;
    // console.log(`getTodoById${id}`);
    const todo = Todos.find((item) => item.id == id);
    res.json({
      message: "berhasil mendapatkan data by Id",
      data: todo,
    });
  },
  addTodo: (req, res) => {
    const data = req.body;

    const newTodo = {
      id: Todos[Todos.length - 1].id + 1,
      value: data.value,
    };

    Todos.push(newTodo);

    res.status(201).json({
      message: "berhasil menambahkan todo baru",
      data: Todos,
    });
  },
  editTodoById: (req, res) => {
    const { id } = req.params;
    const data = req.body;
    // console.log(id, data);
    const editTodo = {
      id: id,
      value: data.value,
    };

    res.json({
      message: "berhasil edit data",
      data: editTodo,
    });
  },
  deleteTodoById: (req, res) => {
    const { id } = req.params;
    const filterTodo = Todos.filter((todo) => todo.id != id);

    res.json({
      message: "berhasil menghapus data",
      data: filterTodo,
    });
  },
};
