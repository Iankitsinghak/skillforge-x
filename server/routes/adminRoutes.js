const express = require('express');
const router = express.Router();
const { postChallenge } = require('../controllers/adminController');
const protect = require('../middleware/authMiddleware'); // basic JWT protect

router.post('/challenges', protect, postChallenge);

module.exports = router;
