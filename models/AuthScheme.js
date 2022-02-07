const mongoose = require("mongoose");

const AuthScheme = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("user", AuthScheme);
