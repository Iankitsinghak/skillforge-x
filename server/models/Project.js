const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  skillsRequired: [String],
  createdBy: String, // username or ID
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
