import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-10">
      {/* HERO SECTION */}
      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Welcome to <span className="text-purple-500">SkillForge X</span>
        </h1>
        <p className="text-xl mb-6 text-gray-300">
          The best platform for{' '}
          <span className="text-purple-400 font-bold">
            <Typewriter
              words={['team collaboration', 'real-world challenges', 'startup jobs', 'AI-based learning']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </span>
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            to="/signup"
            className="bg-purple-600 hover:bg-purple-800 transition duration-300 px-6 py-3 rounded-lg font-semibold"
          >
            Get Started
          </Link>
          <a
            href="#features"
            className="border border-purple-500 hover:bg-purple-700 transition duration-300 px-6 py-3 rounded-lg font-semibold"
          >
            Explore Features
          </a>
        </div>
      </motion.div>

      {/* FEATURES SECTION */}
      <div id="features" className="mt-20 max-w-5xl w-full">
        <h2 className="text-3xl font-bold text-center mb-10">🔥 Features That Set Us Apart</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '🤝',
              title: 'AI Skill Match',
              desc: 'Find the perfect project or job based on your real skills.',
            },
            {
              icon: '🚀',
              title: 'Team Collaboration',
              desc: 'Instantly join teams and build amazing things together.',
            },
            {
              icon: '🏆',
              title: 'Weekly Challenges',
              desc: 'Compete, learn and win every week with fun coding challenges.',
            },
            {
              icon: '📂',
              title: 'GitHub & Resume Integration',
              desc: 'Auto-create portfolio entries directly from your activity.',
            },
            {
              icon: '💼',
              title: 'Skill-Based Job Feed',
              desc: 'No more random jobs — get only what suits you.',
            },
            {
              icon: '🧠',
              title: 'AI Support',
              desc: 'Ask questions, get help — your personal AI guide always available.',
            },
          ].map((f, idx) => (
            <motion.div
              key={idx}
              className="bg-[#1f2937] p-6 rounded-xl border border-gray-700 shadow-md"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
