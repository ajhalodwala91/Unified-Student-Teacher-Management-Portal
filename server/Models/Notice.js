const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
    default: new Date().toISOString().split("T")[0],
  },
});

module.exports = mongoose.model("Notice", noticeSchema);
