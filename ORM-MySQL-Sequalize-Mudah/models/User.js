// import squalize dan Data type
const { Sequelize, DataTypes } = require("sequelize");
// import model databases
const sequelize = require("../config/db");
// buat nama variable untuk table
// sequelize.define untuk membuat tabel
// yang bernama User
const User = sequelize.define(
  "User",
  // yang isinya ada username, email, password
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // jika ingin supaya tabel tidak berubah dari user menjadi users, by default akan ditambahkan s dibelakang
    // freezeTableName: true,
    // otomatis akan membuat time stamps, kalo kita tidak ingin ada
    //  time stamp ganti dia menggunakan ini, by default true
    // timestamps: false,
  }
);

module.exports = User;
