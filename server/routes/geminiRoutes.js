const express = require('express');
const router = express.Router();
const { askGemini } = require('../controllers/geminiController');
const protect = require('../middleware/authMiddleware');

router.post('/', protect, askGemini);

module.exports = router;
