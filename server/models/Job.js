const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  requiredSkills: [String],
  company: String,
  isStartup: { type: Boolean, default: false },
  postedBy: String
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
