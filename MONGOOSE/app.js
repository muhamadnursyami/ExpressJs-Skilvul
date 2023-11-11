const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const db = require("./config/db");
const allRoutes = require("./routes");

db.then(() => {
  console.log("database connect mongodb");
}).catch((err) => console.log(`gagal connect mongodb ${err}`));
// EXPRESS.JSON  HARUS PALING ATAS SEBELUM SEMUA ROUTING
app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
  console.log(`Server Running PORT ${PORT}`);
});