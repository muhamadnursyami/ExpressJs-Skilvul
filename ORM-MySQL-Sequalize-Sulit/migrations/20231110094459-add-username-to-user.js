"use strict";

const { DataTypes } = require("sequelize");

// jika table sudah ada datanya, maka kita tidak bisa menggunakan db:migrate:undo
// karena akan berdampak kepada data bisa hilang
// jadi kita perlu membuat file migrate baru, lihat commad di doc.
// kemudian cara baca file ini adalah kita ingin menambahkan username
// kedalam tabel user

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // kita await queryInterface akan menambahakn sebuah kolom
    // yang nama tabelnya itu Users, dan nama kolomnya itu username,
    // type data kolom username itu adalah string
    // kolom username akan ditambahkan setelah tabel email.
    await queryInterface.addColumn("Users", "username", {
      type: DataTypes.STRING,
      after: "email",
    });
    // setelah kita menjalankan db:migrate
    // jalan lupa tambahakan di model users itu kolom username
  },

  async down(queryInterface, Sequelize) {
    // kalo kita nggak jadi tambah kolom
    await queryInterface.removeColumn("Users", "username");
  },
};
