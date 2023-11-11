const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const allRoutes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

db.then(() => {
  console.log("database connect mongodb");
}).catch((err) => console.log(`gagal connect mongodb ${err}`));
app.use(cors());
// EXPRESS.JSON  HARUS PALING ATAS SEBELUM SEMUA ROUTING
app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
  console.log(`Server Running PORT ${PORT}`);
});
