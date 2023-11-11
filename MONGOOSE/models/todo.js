const moongose = require("mongoose");

const todoSchema = new moongose.Schema({
  value: String,
  status: Boolean,
  userID: {
    type: moongose.ObjectId,
    ref: "User",
  },
});

const Todo = moongose.model("Todo", todoSchema);

module.exports = Todo;
