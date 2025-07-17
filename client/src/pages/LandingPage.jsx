// src/pages/LandingPage.jsx
import Typewriter from '../components/Typewriter';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col justify-center items-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-center text-purple-500 mb-4"
      >
        SkillForge X
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl text-gray-300 text-center mb-10"
      >
        <Typewriter
          texts={[
            'Best platform for team collab',
            'Join real dev challenges',
            'Auto-matched jobs & projects',
            'Build your dream tech profile',
          ]}
          speed={80}
          delay={2000}
        />
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-6"
      >
        <button
          onClick={() => navigate('/signup')}
          className="bg-purple-600 hover:bg-purple-800 text-white px-8 py-3 rounded-full font-semibold transition duration-300"
        >
          🚀 Get Started
        </button>
        <button
          onClick={() => navigate('/projects')}
          className="border border-purple-500 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300"
        >
          🔍 Explore Projects
        </button>
      </motion.div>
    </div>
  );
};

export default LandingPage;
