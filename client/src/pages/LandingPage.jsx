// src/pages/LandingPage.jsx
import Typewriter from '../components/Typewriter';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-purple-500 mb-4">
        SkillForge X
      </h1>

      <h2 className="text-xl md:text-2xl text-gray-300 text-center mb-10">
        <Typewriter
          words={[
            'Best platform for team collab',
            'Join real dev challenges',
            'Auto-matched jobs & projects',
            'Build your dream tech profile',
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
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
      </div>
    </div>
  );
};

export default LandingPage;
