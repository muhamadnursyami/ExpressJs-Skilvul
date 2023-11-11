const moongose = require("mongoose");

const usersSchema = new moongose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
});

const User = moongose.model("User", usersSchema);

module.exports = User;
