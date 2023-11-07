// import npm jwt
const jwt = require("jsonwebtoken");

// kita masukin dulu key/kunci nya kedalam variabel
// key disini sama dengan key/kunci yang menhandle /login
// cuman key disini di masukan kedalam variabel dulu
const KEY = "wkwkwk";

const verifyToken = (req, res, next) => {
  // kemudian dia ngambil token
  //    data tokennya akan seperti ini : Bearer  token
  const header = req.headers.authorization;
  // jika headernya tidak ada
  if (!header) {
    res.json({
      message: "header undefined",
    });
    return;
  }

  //   jika token ada maka kita split dulu
  // data header akan di dapat seperti ini Bearer tokenya
  //  kita hanya ambil tokenya saja tanpa bearer
  // jadi kita split dan hanya ambil index ke 1
  // ke split berdasarkan spasi
  const token = header.split(" ")[1];

  if (!token) {
    res.json({
      message: "token invalid",
    });
    return;
  }

  //   jika token ada kita verify tokenya
  //   kemudian kita masukan kedalam payload / kita ambil payloanya
  // kita verify token serta menggunakan keynya
  // key ini harus sama dengan key  diauthRoutes
  const payload = jwt.verify(token, KEY);

  //   kemudian kita masukan payload nya itu kedalam req. payload
  req.payload = payload;
  // next artinya dizinkan akses ke endpoint yang di tuju.
  next();
};

module.exports = verifyToken;
