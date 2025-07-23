const Project = require('../models/Project');
const User = require('../models/User');
const JoinRequest = require('../models/JoinRequest'); // <- New model

exports.getMatchedProjects = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const userSkills = user.skills;

    const matchedProjects = await Project.find({
      skillsRequired: { $in: userSkills }
    });

    res.json(matchedProjects);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch matched projects' });
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Join Project
exports.joinProject = async (req, res) => {
  try {
    const { projectId } = req.body;
    const existing = await JoinRequest.findOne({
      user: req.user.id,
      project: projectId
    });

    if (existing) {
      return res.status(400).json({ msg: 'Already requested to join this project' });
    }

    const joinRequest = await JoinRequest.create({
      user: req.user.id,
      project: projectId
    });

    res.status(201).json({ msg: 'Join request submitted', joinRequest });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to join project' });
  }
};
