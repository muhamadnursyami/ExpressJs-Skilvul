// import express terlebih dahulu
const express = require("express");
// masukan expres kedalam variabel app
const app = express();
// buat sebuat port
const PORT = process.env.PORT || 3000;
// panggil config db
const db = require("./config/db.js");
// panggil semua routes
const allRoutes = require("./routes");
// panggil model user
const User = require("./models/User.js");
const Todo = require("./models/Todo.js");
// buat sebuat function untuk menkoneksikan sebuah databases
async function testing() {
  // kode dibawah ini dari documention
  try {
    // mengkoneksikan database, panggil dbnya kemudian gunakan function authenticate untuk konek
    await db.authenticate();
    // membuat sebuat tabel User, dan menghapus jika tablenya udah ada didatabase
    // tidak direkomendasikan menggunakan force true karena dapat menyebabkan kehilangan data.
    // dia akan menyesuaikan isi kolom di model Users
    // User.sync hanya dijalankan sekali saja jika sudah dibuat, kemudian comment supaya
    // tidak terjadi menghapus datanya.
    // await User.sync({ force: true });
    // await Todo.sync({ force: true });
    console.log("The table for the User model was just (re)created!");
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
// pangill function testing uuntuk menjalankan function koneksi database
testing();

// supaya bisa menerima data body berupa json
app.use(express.json());
// gunakan semua allRoutes yang telah di buat
app.use(allRoutes);

// jalankan server
app.listen(PORT, (req, res) => {
  console.log(`Server Running Port ${PORT}`);
});
