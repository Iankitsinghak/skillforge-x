const express = require('express');
const router = express.Router();
const { getMatchedProjects } = require('../controllers/projectController');
const protect = require('../middleware/authMiddleware');

router.get('/match', protect, getMatchedProjects);

module.exports = router;
