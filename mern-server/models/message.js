const db = require("../db");

// Create a model from the schema
const Message = db.model("Message", {
   username: { type: String, required: true },
   text:     { type: String, required: true },
   posted:   { type: Date, default: Date.now }
});

module.exports = Message;