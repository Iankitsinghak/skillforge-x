const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

exports.signup = async (req, res) => {
  try {
    const { username, email, password, skills } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ msg: 'Email already exists' });

    const user = await User.create({ username, email, password, skills });
    res.status(201).json({
      token: generateToken(user),
      user: { id: user._id, username, email, skills },
    });
  } catch (err) {
    res.status(500).json({ msg: 'Signup error', error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ msg: 'Invalid password' });

    res.status(200).json({
      token: generateToken(user),
      user: { id: user._id, username: user.username, email, skills: user.skills },
    });
  } catch (err) {
    res.status(500).json({ msg: 'Login error', error: err.message });
  }
};
