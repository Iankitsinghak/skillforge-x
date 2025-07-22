const mongoose = require('mongoose');

const joinRequestSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'selected', 'rejected'],
    default: 'pending',
  },
});

module.exports = mongoose.model('JoinRequest', joinRequestSchema);
