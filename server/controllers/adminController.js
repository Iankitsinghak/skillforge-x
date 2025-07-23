const Job = require('../models/Job');
const Project = require('../models/Project');
const Application = require('../models/Application');
const JoinRequest = require('../models/JoinRequest');
const Challenge = require('../models/Challenge');

// ✅ POST a new Challenge
exports.postChallenge = async (req, res) => {
  try {
    const { title, description, skillsRequired, deadline } = req.body;

    const challenge = await Challenge.create({
      title,
      description,
      skillsRequired,
      deadline,
      postedBy: req.user.id,
    });

    res.status(201).json({ msg: 'Challenge posted successfully', challenge });
  } catch (err) {
    console.error('Challenge Post Error:', err.message);
    res.status(500).json({ msg: 'Failed to post challenge' });
  }
};

// ✅ POST a new Job
exports.postJob = async (req, res) => {
  try {
    const { title, description, skillsRequired, salary, location, company } = req.body;

    const job = await Job.create({
      title,
      description,
      skillsRequired,
      salary,
      location,
      company,
      postedBy: req.user.id
    });

    res.status(201).json({ msg: 'Job posted successfully', job });
  } catch (err) {
    console.error('Job Post Error:', err.message);
    res.status(500).json({ msg: 'Failed to post job' });
  }
};

// ✅ POST a new Project
exports.postProject = async (req, res) => {
  try {
    const { title, description, techStack, deadline } = req.body;
    const project = await Project.create({
      title,
      description,
      techStack,
      deadline,
      postedBy: req.user.id
    });
    res.status(201).json({ msg: 'Project posted successfully', project });
  } catch (err) {
    console.error('Project Post Error:', err.message);
    res.status(500).json({ msg: 'Failed to post project' });
  }
};

// ✅ GET all Job Applicants
exports.getJobApplicants = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate('job', 'title')
      .populate('user', 'name email');

    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch job applicants' });
  }
};

// ✅ GET all Project Join Requests
exports.getProjectRequests = async (req, res) => {
  try {
    const requests = await JoinRequest.find()
      .populate('project', 'title')
      .populate('user', 'name email');

    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch project join requests' });
  }
};
