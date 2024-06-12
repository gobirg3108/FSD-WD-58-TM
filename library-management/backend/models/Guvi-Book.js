const mongoose = require("mongoose");

const guviBookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, require: true },
  description: { type: String },
});

const GuviBook = mongoose.model("GuviBook", guviBookSchema);
module.exports = GuviBook;
