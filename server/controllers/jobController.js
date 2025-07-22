const Job = require('../models/Job');
const User = require('../models/User');
const Application = require('../models/Application'); // <- New model

exports.getMatchedJobs = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const matched = await Job.find({
      requiredSkills: { $in: user.skills }
    });
    res.json(matched);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch jobs' });
  }
};

exports.getStartupJobs = async (req, res) => {
  try {
    const startupJobs = await Job.find({ isStartup: true });
    res.json(startupJobs);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch startup jobs' });
  }
};

// ✅ Apply to Job
exports.applyToJob = async (req, res) => {
  try {
    const { jobId } = req.body;
    const existing = await Application.findOne({
      user: req.user.id,
      job: jobId
    });

    if (existing) {
      return res.status(400).json({ msg: 'Already applied to this job' });
    }

    const application = await Application.create({
      user: req.user.id,
      job: jobId
    });

    res.status(201).json({ msg: 'Application submitted', application });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to apply to job' });
  }
};
