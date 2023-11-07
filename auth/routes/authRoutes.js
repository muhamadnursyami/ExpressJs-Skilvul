const express = require("express");
// import npm hashing
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const Users = require("../models/Users");
const route = express.Router();
// membuat endpoint handle login
route.post("/login", (req, res) => {
  // kita ambil dulu datanya menggunakan req.body
  const data = req.body;
  // kita cari dulu apakah data yang di kirim diatas ini
  // ada datanya, sama  didalam model Users.
  // kita memilih email untuk dijadikan object
  // pencarian datanya
  // kita looping model users terus kita banding dengan data;
  // console.log("login dijalankan");
  // jika datanya ada maka akan mengembalikan data email dan password
  // jika tidak ada maka undefined
  const user = Users.find((item) => item.email === data.email);
  // console.log(user);
  // jika user tidak ada
  if (!user) {
    res.json({
      message: "siapa kamu?",
    });
    // kenapa menreturn kosong
    // karena kalo udah  return maka
    // nggak usah jalanin code dibawahnya lagi
    // ibarat seperti break. abaikan code dibawah.
    return;
  }
  // jika ada usernya maka akan di bandingan / di cek
  // password yang di acak tadi dengan password yang telah di inputkan
  if (bcrypt.compareSync(data.password, user.password)) {
    // jika berhasil login maka kita akan buat token
    // jwt akan mengsign data yang isi nya itu adalah email
    // dan key atau kunci rahasia nya itu adalah wkwkwwk
    // key ini harus disimpan di tempat yang aman
    const token = jwt.sign({ emai: data.email }, "wkwkwk");
    res.json({
      message: "anda berhasil login",
      // masukin tokenya kedalam respon
      token,
    });
    return;
  }
  // jika passwordnya salah
  res.json({
    message: " password anda salah",
  });
});

// membuat endpoint handle register
route.post("/register", (req, res) => {
  // kita ambil dulu datanya menggunakan req.body
  const data = req.body;
  //   ada 2 cara dalam menghasing password
  // 1. secara asyncrounuus dan syncrounus
  // sekarang kita memakai syncrnous
  // saltRounds disini makna nya adalah
  // ingin berapa kali password nya akan di hashing

  const saltRounds = 10;
  //   kita akan hashing data.password sebanyak 10 kali hashing
  const hashPassword = bcrypt.hashSync(data.password, saltRounds);
  //   setelah di hasil hashPassword akan di masukan kembali ke  data.password
  data.password = hashPassword;
  Users.push(data);
  res.json({
    message: "berhasil register",
    data,
  });
});

module.exports = route;
