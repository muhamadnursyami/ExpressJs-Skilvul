const express = require("express");

const app = express();
const rootRoutes = require("./routes");
const PORT = process.env.PORT || 3000;

app.use(express.json());
// panggil rootRoute
app.use(rootRoutes);
// untuk menjalankan server
app.listen(PORT, () => {
  console.log(`Server is Running Port ${PORT}`);
});
