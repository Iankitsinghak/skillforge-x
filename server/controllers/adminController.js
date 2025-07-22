const Job = require('../models/Job');
const Project = require('../models/Project');
const Application = require('../models/Application');
const JoinRequest = require('../models/JoinRequest');

// POST a new Job
exports.postJob = async (req, res) => {
  try {
    const { title, description, requiredSkills, company, isStartup } = req.body;
    const job = await Job.create({
      title,
      description,
      requiredSkills,
      company,
      isStartup,
      postedBy: req.user.id
    });
    res.status(201).json({ msg: 'Job posted successfully', job });
  } catch (err) {
    console.error('Job Post Error:', err.message);
    res.status(500).json({ msg: 'Failed to post job' });
  }
};

// POST a new Project
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

// GET all Job Applicants for Admin
exports.getJobApplicants = async (req, res) => {
  try {
    const applications = await Application.find().populate('jobId userId', 'title name email');
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch job applicants' });
  }
};

// GET all Project Join Requests for Admin
exports.getProjectRequests = async (req, res) => {
  try {
    const requests = await JoinRequest.find().populate('projectId userId', 'title name email');
    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch project join requests' });
  }
};
