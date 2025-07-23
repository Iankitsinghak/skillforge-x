const Job = require('../models/Job');
const User = require('../models/User');
const Application = require('../models/Application');

// ✅ Get Jobs Matching User Skills
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

// ✅ Get Only Startup Jobs
exports.getStartupJobs = async (req, res) => {
  try {
    const startupJobs = await Job.find({ isStartup: true });
    res.json(startupJobs);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch startup jobs' });
  }
};

// ✅ Get All Jobs
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Apply to Job (Prevent Duplicate Applications)
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

// ✅ (Optional) Create Job Route Controller with skill parsing
exports.postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      company,
      requiredSkills,
      isStartup,
      location
    } = req.body;

    const job = new Job({
      title,
      description,
      company,
      location,
      isStartup,
      requiredSkills: Array.isArray(requiredSkills)
        ? requiredSkills
        : requiredSkills.split(',').map(skill => skill.trim().toLowerCase())
    });

    await job.save();
    res.status(201).json({ msg: 'Job posted successfully', job });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to post job' });
  }
};
