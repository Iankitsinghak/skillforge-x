const express = require('express');
const { getMatchedJobs, getStartupJobs } = require('../controllers/jobController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/match', protect, getMatchedJobs);
router.get('/startups', protect, getStartupJobs);

module.exports = router;
