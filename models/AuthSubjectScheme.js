const mongoose = require("mongoose");

const AuthSubjectScheme = new mongoose.Schema({
  subject: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("subject", AuthSubjectScheme);
