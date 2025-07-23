// server/seed.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');
const Job = require('./models/Job');
const User = require('./models/User'); // Required to get a valid admin id

dotenv.config();
const connectDB = require('./config/db');

const seedData = async () => {
  try {
    await connectDB();

    // 🧠 Use an existing admin user or create dummy
    const adminUser = await User.findOne({ isAdmin: true }); // Or by email
    if (!adminUser) {
      console.log('❌ No admin user found. Please create one first.');
      return process.exit(1);
    }

    const adminId = adminUser._id;

    const projects = [
      {
        title: "SkillForge X",
        description: "Platform to connect devs for collab, challenges & startup jobs. AI-powered skill matching.",
        techStack: ["React", "Node.js", "MongoDB", "Gemini API"],
        deadline: "2025-09-01",
        postedBy: adminId,
      },
      {
        title: "CodeTribe",
        description: "Community project hosting hackathons and coding tribes.",
        techStack: ["Next.js", "Express", "Firebase"],
        deadline: "2025-08-15",
        postedBy: adminId,
      },
      {
        title: "OpenMentor",
        description: "Mentorship platform connecting juniors with pros.",
        techStack: ["Vue", "Express", "MongoDB"],
        deadline: "2025-09-10",
        postedBy: adminId,
      },
      {
        title: "Devsync",
        description: "Team chat + collab platform for dev squads.",
        techStack: ["MERN", "Socket.io"],
        deadline: "2025-08-25",
        postedBy: adminId,
      },
      {
        title: "UI Battles",
        description: "Design challenge hub with weekly UI face-offs.",
        techStack: ["React", "Tailwind", "Firebase"],
        deadline: "2025-09-05",
        postedBy: adminId,
      }
    ];

    const jobs = [
      {
        title: "Frontend Dev @ZenoTech",
        description: "Looking for React.js intern for AI dashboard app.",
        skillsRequired: ["React", "Tailwind", "API Integration"],
        deadline: "2025-08-10",
        postedBy: adminId,
      },
      {
        title: "Backend Intern @HackVerse",
        description: "Node.js + Mongo backend developer for coding platform.",
        skillsRequired: ["Node.js", "MongoDB", "JWT"],
        deadline: "2025-08-15",
        postedBy: adminId,
      },
      {
        title: "Startup Job @QuickMentor",
        description: "Early stage startup hiring fullstack with MERN stack.",
        skillsRequired: ["React", "Node.js", "MongoDB", "Redux"],
        deadline: "2025-08-20",
        postedBy: adminId,
      },
      {
        title: "AI Integration Role @ThinkBot",
        description: "Gemini/GPT API engineer for chatbot startup.",
        skillsRequired: ["Gemini API", "Express", "Prompt Engineering"],
        deadline: "2025-08-22",
        postedBy: adminId,
      },
      {
        title: "UI Dev @DesignForge",
        description: "Minimal UI dev required for project portfolio builder.",
        skillsRequired: ["HTML", "CSS", "Tailwind", "Framer Motion"],
        deadline: "2025-08-30",
        postedBy: adminId,
      }
    ];

    await Project.insertMany(projects);
    await Job.insertMany(jobs);

    console.log("✅ Projects & Jobs inserted successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding Failed:", err);
    process.exit(1);
  }
};

seedData();
