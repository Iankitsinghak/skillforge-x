import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-purple-500">SkillForge X</span>
      </motion.h1>

      <motion.div
        className="mt-6 text-xl sm:text-2xl text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Typewriter
          words={[
            'Build. Collaborate. Conquer.',
            'Your skills deserve real challenges.',
            "Not another tutorial site — this one's real.",
            'Post. Collab. Get Hired.',
          ]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={2000}
        />
      </motion.div>

      <motion.div
        className="mt-10 flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <Link to="/signup">
          <button className="bg-purple-600 hover:bg-purple-800 px-6 py-3 rounded-xl text-lg font-semibold">
            Get Started
          </button>
        </Link>
        <Link to="/projects">
          <button className="border border-purple-500 hover:bg-purple-900 px-6 py-3 rounded-xl text-lg font-semibold">
            Explore Projects
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
