"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // defaultnya  akan menjalanakn fungsi up kalo kita menggunakan db:seed:undo maka akan menjalankan fungsi down
  // lihat dokumnetasi migrations
  async up(queryInterface, Sequelize) {
    // kita akan menambahkan data awal yang data  banyak
    // menggunakan  bulkInsert artinya kita ingin memasukan data banyak.
    // yang tabelnya itu Users, terus datanya array of object
    await queryInterface.bulkInsert("Users", [
      {
        name: "Syami",
        email: "syami@gmail.com",
        username: "syami",
        password: "123",
      },
      {
        name: "Budi",
        email: "budi@gmail.com",
        username: "budi",
        password: "123",
      },
      {
        name: "Jokowi",
        email: "jokowi@gmail.com",
        username: "joko",
        password: "123",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // jika kita tidak ingin menambahkan data maka akan melakukan ini
    return queryInterface.bulkDelete("Users", null, {});
  },
};
