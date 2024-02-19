const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String },
  course: { type: String },
  year: { type: Number },
  email: { type: String },
  mobileNum: { type: String },
  address: { type: String },
});

module.exports = mongoose.model("Student", studentSchema);
