const mongoose = require("mongoose");

const db_url = `mongodb+srv://sami-test-database:8pf13BzOLGTDj57g@server-sicerdik.0c0wbvh.mongodb.net/coba-mongoose`;

const db = mongoose.connect(db_url);

module.exports = db;
