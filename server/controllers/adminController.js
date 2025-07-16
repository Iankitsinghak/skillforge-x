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
const Job = require('../models/Job');

exports.postJob = async (req, res) => {
  try {
    const { title, description, requiredSkills, company, isStartup } = req.body;
    const job = await Job.create({
      title,
      description,
      requiredSkills,
      company,
      isStartup,
      postedBy: req.user.id
    });
    res.status(201).json({ msg: 'Job posted successfully', job });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to post job' });
  }
};
