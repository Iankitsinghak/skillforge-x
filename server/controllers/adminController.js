const Challenge = require('../models/Challenge');

exports.postChallenge = async (req, res) => {
  try {
    const { title, description, type, deadline } = req.body;
    const challenge = await Challenge.create({ title, description, type, deadline });
    res.status(201).json({ msg: 'Challenge posted successfully', challenge });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to post challenge' });
  }
};
