const Challenge = require('../models/Challenge');

exports.getChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find().sort({ createdAt: -1 });
    res.json(challenges);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch challenges' });
  }
};

exports.getChallengeById = async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    res.json(challenge);
  } catch (err) {
    res.status(404).json({ msg: 'Challenge not found' });
  }
};

exports.submitChallenge = async (req, res) => {
  try {
    const { link } = req.body;
    const challenge = await Challenge.findById(req.params.id);
    challenge.submissions.push({ submittedBy: req.user.id, link });
    await challenge.save();
    res.json({ msg: 'Submission successful' });
  } catch (err) {
    res.status(500).json({ msg: 'Submission failed' });
  }
};
