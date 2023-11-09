// import sequalize
const { Sequelize } = require("sequelize");
// buat sebuah  connect to database dari Sequalize
// yang isinya itu ada host, dialet ->  database yang dipakai,
// username, password, database -> nama database
const sequelize = new Sequelize({
  host: "localhost",
  dialect: "mysql",
  username: "root",
  password: "18092003",
  database: "squalize_mudah",
});

// exports
module.exports = sequelize;
