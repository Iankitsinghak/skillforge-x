import { useEffect, useState } from 'react';
import { getProfile } from '../api/auth';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();
      setUser(data.user || null);
    };
    fetchProfile();
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-black text-white">
        <p className="text-xl animate-pulse">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-6 py-10">
      {/* Animated Welcome */}
      <motion.h2
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Welcome, {user.username} 👋
      </motion.h2>

      {/* User Info Card */}
      <motion.div
        className="bg-[#111827] border border-gray-700 rounded-2xl p-6 shadow-xl max-w-xl mx-auto mb-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p className="text-lg mb-2">📧 <span className="text-gray-300">{user.email}</span></p>
        <p className="text-lg">🧠 Skills:</p>
        <div className="flex flex-wrap mt-2 gap-2">
          {user.skills && user.skills.length > 0 ? (
            user.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-purple-700 text-sm font-medium shadow-sm"
              >
                {skill}
              </span>
            ))
          ) : (
            <span className="text-gray-400">No skills added</span>
          )}
        </div>
      </motion.div>

      {/* Quick Action Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {[
          { icon: '🚀', title: 'Explore Projects', link: '/projects' },
          { icon: '🎯', title: 'Join Challenges', link: '/challenges' },
          { icon: '🤖', title: 'Ask AI', link: '/ask' },
          { icon: '💼', title: 'Skill-Matched Jobs', link: '/jobs' },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            className="bg-[#1f2937] hover:bg-[#2a374b] border border-gray-700 rounded-xl p-6 flex flex-col items-start shadow-lg transition duration-300 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Dashboard;
