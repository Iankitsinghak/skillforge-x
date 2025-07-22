const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');

const {
  postJob,
  postProject,
  postChallenge,
  getJobApplicants,
  getProjectRequests
} = require('../controllers/adminController');

// POST a new job
router.post('/jobs', protect, postJob);

// POST a new project
router.post('/projects', protect, postProject);

// POST a new challenge
router.post('/challenges', protect, postChallenge);

// GET job applicants
router.get('/job-applicants', protect, getJobApplicants);

// GET project join requests
router.get('/project-requests', protect, getProjectRequests);

module.exports = router;
