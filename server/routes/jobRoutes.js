const express = require('express');
const { getMatchedJobs, getStartupJobs, getAllJobs } = require('../controllers/jobController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getAllJobs); // <-- This is required
router.get('/match', protect, getMatchedJobs);
router.get('/startups', protect, getStartupJobs);

module.exports = router;
