const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: String,
  studID: String,
});

module.exports = mongoose.model('Teacher', teacherSchema);
