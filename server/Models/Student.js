const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  studID: String,
});

const Student = mongoose.model('Student', studentSchema);
