const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const geminiRoutes = require('./routes/geminiRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/jobs', require('./routes/jobRoutes'));
app.use('/api/challenges', require('./routes/challengeRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/ask', require('./routes/geminiRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/gemini', geminiRoutes);

app.get('/', (req, res) => res.send('SkillForge X API is running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
