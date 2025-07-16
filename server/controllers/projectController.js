const Project = require('../models/Project');
const User = require('../models/User');

exports.getMatchedProjects = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const userSkills = user.skills;

    const matchedProjects = await Project.find({
      skillsRequired: { $in: userSkills }
    });

    res.json(matchedProjects);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch matched projects' });
  }
};
