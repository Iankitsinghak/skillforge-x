const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  type: String, // "coding", "design", etc.
  deadline: Date,
  submissions: [
    {
      submittedBy: String,
      link: String,
      submittedAt: { type: Date, default: Date.now }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Challenge', challengeSchema);
