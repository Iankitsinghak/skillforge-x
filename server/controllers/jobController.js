const Job = require('../models/Job');
const User = require('../models/User');

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
