const express = require('express');
const { getMatchedProjects, getAllProjects } = require('../controllers/projectController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getAllProjects); // <-- This is required
router.get('/match', protect, getMatchedProjects);

module.exports = router;
