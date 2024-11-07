const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/message_db");
module.exports = mongoose;